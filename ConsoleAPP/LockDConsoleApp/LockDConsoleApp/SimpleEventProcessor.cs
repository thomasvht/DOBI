using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceBus.Messaging;
using System.Diagnostics;
using Newtonsoft.Json;
using MongoDB.Bson;
using MongoDB.Driver;

namespace LockDConsoleApp
{
    class SimpleEventProcessor : IEventProcessor
    {
        Stopwatch checkpointStopWatch;

        protected static IMongoClient _client;
        protected static IMongoDatabase _database;


        async Task IEventProcessor.CloseAsync(PartitionContext context, CloseReason reason)
        {
            Console.WriteLine("Processor Shutting Down. Partition '{0}', Reason: '{1}'.", context.Lease.PartitionId, reason);
            if (reason == CloseReason.Shutdown)
            {
                await context.CheckpointAsync();
            }
        }

        Task IEventProcessor.OpenAsync(PartitionContext context)
        {
            Console.WriteLine("SimpleEventProcessor initialized.  Partition: '{0}', Offset: '{1}'", context.Lease.PartitionId, context.Lease.Offset);
            this.checkpointStopWatch = new Stopwatch();
            this.checkpointStopWatch.Start();
            return Task.FromResult<object>(null);
        }

        public class LoraMessage{
            public string LockId { get; set; }
            public float Latitude { get; set; }
            public float Longitude { get; set; }
            public string Timestamp { get; set; }
        }

        async Task IEventProcessor.ProcessEventsAsync(PartitionContext context, IEnumerable<EventData> messages)
        {
            LoraMessage message = new LoraMessage();
            _client = new MongoClient();
            _database = _client.GetDatabase("lockD");

            foreach (EventData eventData in messages)
            {
                string data = Encoding.UTF8.GetString(eventData.GetBytes());
                //"{\n      \"LockId\":\"1C8779C0000000EC\",\n      \"Latitude\":\"1.0\",\n      \"Longitude\":\"1.0\",\n      \"Timestamp\":\"0\"\n}"

                Console.WriteLine(string.Format("Message received.  Partition: '{0}', Data: '{1}'", context.Lease.PartitionId, data));
                try
                {
                    message = JsonConvert.DeserializeObject<LoraMessage>(data);
                    var document = new BsonDocument
                    {
                        { "LockId", message.LockId },
                        { "Latitude", message.Latitude },
                        { "Longitude", message.Longitude },
                        { "Timestamp", DateTime.Now.ToLocalTime()}
                    };
                    string LastLocation = message.Latitude+","+message.Longitude;

                    var loraMessages = _database.GetCollection<BsonDocument>("loraMessages");
                    await loraMessages.InsertOneAsync(document);

                    var bikes = _database.GetCollection<BsonDocument>("bikes");
                    var filter = Builders<BsonDocument>.Filter.Eq("LockId", message.LockId);
                    var update = Builders<BsonDocument>.Update
                        .Set("LastLocation", LastLocation);
                    var result = await bikes.UpdateOneAsync(filter, update);
                }
                catch
                {
                    Console.WriteLine("Failed To Deserialize");
                }
            }

            //Call checkpoint every 5 minutes, so that worker can resume processing from 5 minutes back if it restarts.
            if (this.checkpointStopWatch.Elapsed > TimeSpan.FromMinutes(5))
            {
                await context.CheckpointAsync();
                this.checkpointStopWatch.Restart();
            }
        }
    }
}
