/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let BikeSchema   = new Schema({
    LockId:String,
    Owner : String,
    User : String,
    LastLocation : String,
    CurrentStatus : String,
    UnlockCode : String
});

BikeSchema.static('findByOwner', function (Owner, callback) {
    return this.find({ Owner: Owner }, callback);
});

BikeSchema.static('findByUser', function (User, callback) {
    return this.find({ User: User }, callback);
});

module.exports = mongoose.model('Bike', BikeSchema);