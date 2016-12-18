/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
/**
 * Created by Sander Verkaemer on 26/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let FriendRequestSchema   = new Schema({
    Sender: String,
    Receiver: String
});

FriendRequestSchema.static('findByReceiver', function (Receiver, callback) {
    return this.find({ Receiver: Receiver }, callback);
});

module.exports = mongoose.model('FriendRequest', FriendRequestSchema);