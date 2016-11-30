/**
 * Created by Sander Verkaemer on 23/11/2016.
 */
let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let LockSchema   = new Schema({
    Name: String,
    UserId: String
});

module.exports = mongoose.model('Bear', LockSchema);