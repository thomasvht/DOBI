/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let MaintenanceSchema   = new Schema({
    BikeId: String,
    Date: Date,
    Mechanic: String,
    Description: String,
    Price: String
});

MaintenanceSchema.static('findByBikeId', function (BikeId, callback) {
    return this.find({ BikeId: BikeId }, callback).sort({Date: -1}).execFind(function(err,docs){

    });
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);