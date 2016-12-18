/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let BikeSchema   = new Schema({
    Number: Number,
    LockId:String,
    Owner : String,
    User : Object,
    LastLocation : String,
    inMaintenance : Boolean,
    UnlockCode : String
});

BikeSchema.static('findByOwner', function (Owner, callback) {
    return this.find({ Owner: Owner }, callback);
});

BikeSchema.static('findByUser', function (User, callback) {
    return this.find({ User: User }, callback);
});

BikeSchema.static('findByNumber', function (Number, callback) {
    return this.find({ Number: Number }, callback);
});

BikeSchema.static('findByLockId', function (LockId, callback) {
    return this.find({ LockId: LockId }, callback);
});
module.exports = mongoose.model('Bike', BikeSchema);