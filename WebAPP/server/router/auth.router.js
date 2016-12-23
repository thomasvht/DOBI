/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
let User = require('../models/user.model'),
    jwt = require('jwt-simple'),
    helpers = require('../helpers/helpers');

module.exports = {
    login: function (req,res) {
        let reqUser = req.body;

        if(!reqUser.Email){
            return res.send({'error': 'No valid Email found'});
        }

        User.findOne({Email:reqUser.Email.toLowerCase()},function (err, user) {
            if(err) throw (err);

            if(!user){
                res.send({'error': 'User not recognized!'});
                return;
            }

            if(!reqUser.Password){
                res.send({'error': 'Wrong Password!'});
                return;
            }

            user.comparePasswords(reqUser.Password, function(err, isMatch) {
                if(err) helpers.handleError(err);

                if(!isMatch){
                    res.send({'error':'Wrong Password!'});
                    return;
                }

                return res.json(genToken(user));
            })
        });
    },

    register: function (req,res) {
        let user = req.body;

        if(!user.Firstname || !user.Name || !user.Email || !user.Password) {
            res.json({"error": "All fields are required"});
            return;
        }

        let newUser = new User({
            Firstname: user.Firstname,
            Name: user.Name,
            Email: user.Email,
            Password: user.Password
        });

        newUser.save(function (err) {
            if(err){
                res.json({"error":"User already exists"});
                return;
            }

            return res.json(genToken(newUser));
        });
    }
};

function genToken(user) {
    let expires = expiresIn(8); // 7 days
    let token = jwt.encode({
        exp: expires
    }, require('../helpers/secret')());

    return {
        token: token,
        expires: expires,
        user: user
    };
}
function expiresIn(numDays) {
    let dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}