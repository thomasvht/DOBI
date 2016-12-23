using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ServiceBus.Messaging;

namespace LockDConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string eventHubConnectionString = "Endpoint=sb://nmct-domotica.servicebus.windows.net/;SharedAccessKeyName=Enco;SharedAccessKey=TuPgu/QnqmWnUOHV4thIx3UeuOKeEG46Cu+W7d9Mhvc=";
            string eventHubName = "lockd";
            string storageAccountName = "nmctdomotica";
            string storageAccountKey = "2Dfl5Ci3nuoMDwxFkvOd91xmy12f7QEWz6CmbcyTwfZ/pNOPc4hUAHVja7s9lcFw8dBP6YbVahIF+IJazTi3UQ==";
            string storageConnectionString = string.Format("DefaultEndpointsProtocol=https;AccountName={0};AccountKey={1}", storageAccountName, storageAccountKey);

            string eventProcessorHostName = Guid.NewGuid().ToString();
            EventProcessorHost eventProcessorHost = new EventProcessorHost(eventProcessorHostName, eventHubName, EventHubConsumerGroup.DefaultGroupName, eventHubConnectionString, storageConnectionString);
            Console.WriteLine("Registering EventProcessor...");
            var options = new EventProcessorOptions();
            options.ExceptionReceived += (sender, e) => { Console.WriteLine(e.Exception); };
            eventProcessorHost.RegisterEventProcessorAsync<SimpleEventProcessor>(options).Wait();

            Console.WriteLine("Receiving. Press enter key to stop worker.");
            Console.ReadLine();
            eventProcessorHost.UnregisterEventProcessorAsync().Wait();
        }
    }
}
