/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
"use strict";

let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let BikeSchema   = new Schema({
    Number: { type : Number , index: { unique: true }},
    LockId: { type : String , index: { unique: true }},
    Owner : { type : String , lowercase: true, trim: true },
    User  : {
        Name: { type : String },
        Firstname: { type : String },
        Email: { type : String , lowercase: true, trim: true },
        _id: false
    },
    LastLocation  : { type : String },
    inMaintenance : { type : Boolean, default : true },
    UnlockCode    : { type : String }
});

BikeSchema.static('findByOwner', function (Owner, callback) {
    return this.find({ Owner: Owner }, callback);
});
BikeSchema.static('findByUser', function (Email, callback) {
    return this.find({ "User.Email": Email }, callback);
});
BikeSchema.static('findByNumber', function (Number, callback) {
    return this.findOne({ Number: Number }, callback);
});
BikeSchema.static('findByLockId', function (LockId, callback) {
    return this.findOne({ LockId: LockId }, callback);
});

module.exports = mongoose.model('Bike', BikeSchema);