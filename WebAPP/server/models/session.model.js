/**
 * Created by Sander Verkaemer on 19/12/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let SessionSchema = new Schema({
    Owner : { type : String },
    User : { type : String },
    TimeFrom : { type : Date },
    TimeTo : { type : Date },
    BikeId : { type : String }
});

SessionSchema.static('findByUser', function (Email, callback) {
    return this.find({ "User": Email }, callback);
});

SessionSchema.static('findByOwner', function (Email, callback) {
    return this.find({ "Owner": Email }, callback);
});

module.exports = mongoose.model('Session', SessionSchema);