/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let errorSchema   = new Schema({
    "errorMessage" : { type : String },
    "timestamp" : { type: Date, default: new Date().toString() }
});

let Error = mongoose.model('Error', errorSchema);

module.exports = {
      getIPAddress : function (cb) {
          let os = require('os');
          let ifaces = os.networkInterfaces();

          Object.keys(ifaces).forEach(function (ifname) {
              ifaces[ifname].forEach(function (iface) {
                  if ('IPv4' !== iface.family || iface.internal !== false) {
                      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                      return;
                  }

                  cb(null, iface.address);
              });
          });
      },

      handleError : function (err) {
          let error = new Error();
          console.log("Error Fired at", new Date().toString(),": ",err.message);
          error.errorMessage = err.message;

          error.save(function(err) {
              if (err)
                  console.error("Error at the handleError Function")
          });
      }
};