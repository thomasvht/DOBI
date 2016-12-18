/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let MaintenanceSchema   = new Schema({
    BikeId: { type : String },
    Date: { type : Date },
    Mechanic: { type : String },
    Description: { type : String },
    Price: { type : Number }
});

MaintenanceSchema.static('findByBikeId', function (BikeId, callback) {
    return this.find({ BikeId: BikeId }, callback).sort({Date: -1}).execFind(function(err,docs){

    });
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema);