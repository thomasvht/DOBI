/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
"use strict";

let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let FriendRequestSchema   = new Schema({
    Sender: { type : String },
    Receiver: { type : String }
});

FriendRequestSchema.static('findByReceiver', function (Receiver, callback) {
    return this.find({ Receiver: Receiver }, callback);
});

module.exports = mongoose.model('FriendRequest', FriendRequestSchema);