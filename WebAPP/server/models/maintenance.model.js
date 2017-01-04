/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
"use strict";

let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let MaintenanceSchema   = new Schema({
    BikeId: { type : String },
    Date: { type : String, default: now() },
    Mechanic: { type : String },
    Description: { type : String },
    Price: { type : String }
});

MaintenanceSchema.static('findByBikeId', function (BikeId, callback) {
    return this.find({ BikeId: BikeId }, callback).sort({Date: -1});
});

function now()
{
    let d = new Date();
    let month = d.getMonth()+1;
    let day = d.getDate();

    return (day<10 ? '0' : '') + day + "-"
        + (month<10 ? '0' : '') + month + '-'
        + d.getFullYear();

}

module.exports = mongoose.model('Maintenance', MaintenanceSchema);