/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let SessionSchema   = new Schema({
    Owner: String,
    User: String,
    BikeId: String,
    DateFrom: Date,
    DateTo: Date
});

module.exports = mongoose.model('Session', SessionSchema);