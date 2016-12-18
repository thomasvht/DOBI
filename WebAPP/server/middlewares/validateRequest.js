/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
const jwt = require('jwt-simple');
let User = require('../models/user');

let validateUser = function(email, callback) {
    User.findOne({email:email},function (err, user) {
        if(!user){
            callback(err,null);
            return;
        }

        let dbUserObj = {
            name: user.name,
            role: user.role,
            email: user.email
        };
        callback(err,dbUserObj);
    });
};

module.exports = function(req, res, next) {

    // When performing a cross domain request, you will recieve
    // a preflighted request first. This is to check if our the app
    // is safe.

    // We skip the token outh for [OPTIONS] requests.
    //if(req.method == 'OPTIONS') next();

    let token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    let key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];

    if (token || key) {
        try {
            let decoded = jwt.decode(token, require('../config/secret.js')());

            if (decoded.exp <= Date.now()) {
                next(
                    res.status(403).json({
                        "status": 403,
                        "message": "Token expired"
                    })
                );
            }

            // Authorize the user to see if s/he can access our resources

            validateUser(key, function (err, dbUser) {
                if (dbUser) {
                    if ((req.url.indexOf('admin') >= 0 && dbUser.role == 'admin') || (req.url.indexOf('admin') < 0 && req.url.indexOf('/api/') >= 0)) {
                        next(); // To move to next middleware
                    } else {
                        next(
                            res.status(403).json({
                                "status": 403,
                                "message": "Not Authorized"
                            })
                        );
                    }
                } else {
                    // No user with this name exists, respond back with a 401
                    next(
                        res.status(403).json({
                            "status": 403,
                            "message": "Invalid User"
                        })
                    );
                }
            }); // The key would be the logged in user's username


        } catch (err) {
            next(
                res.status(403).json({
                    "status": 403,
                    "message": "Invalid User"
                })
            );
        }
    } else {
        next(
            res.status(403).json({
                "status": 403,
                "message": "Invalid User"
            })
        );
    }
};