/**
 * Created by Sander Verkaemer on 02/12/2016.
 */

let bcrypt = require('bcrypt-nodejs');

let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let UserSchema = new Schema({
    firstname:String,
    name:String,
    email:String,
    password:String,
    role: String,
    friendList: []
});

UserSchema.pre('save', function (next) {
    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if(err) return next(err);

            user.password = hash;
            next();
        })
    });
});

UserSchema.static('findByEmail',  function (Email, callback) {
    return this.findOne({ email: Email}, 'name firstname email', callback);
});

UserSchema.static('findFriendsByEmail',  function (Email, callback) {
    return this.find({ email: Email}, 'name email friendList', callback);
});

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete  user.password;
    return user;
};

UserSchema.methods.comparePasswords = function(password, callback){
    bcrypt.compare(password, this.password, callback);
};

module.exports = mongoose.model('User', UserSchema);