/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
let bcrypt = require('bcrypt-nodejs');

let mongoose     = require('mongoose');
let Schema       = mongoose.Schema;

let UserSchema = new Schema({
    Firstname: { type : String },
    Name: { type : String },
    Email: { type : String, index: { unique: true }, lowercase:true },
    Password: { type : String },
    Role: { type : String, default: "user" },
    FriendList: [{
        Firstname: { type : String },
        Name: { type : String },
        Email: { type : String },
        _id : false
    }]
});

UserSchema.pre('save', function (next) {
    let user = this;

    if(!user.isModified('Password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if(err) return next(err);

        bcrypt.hash(user.Password, salt, null, function (err, hash) {
            if(err) return next(err);

            user.Password = hash;
            next();
        })
    });
});

UserSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete  user.Password;
    delete  user.FriendList;
    delete  user.Role;
    return user;
};
UserSchema.methods.comparePasswords = function(password, callback){
    bcrypt.compare(password, this.Password, callback);
};

UserSchema.static('findByEmail', function (Email, callback) {
    return this.findOne({ Email: Email }, callback);
});
UserSchema.static('findFriendsByEmail', function (Email, callback) {
    return this.find({ Email: Email }, 'FriendList', callback);
});

module.exports = mongoose.model('User', UserSchema);