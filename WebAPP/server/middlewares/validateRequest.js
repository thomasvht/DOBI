/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
"use strict";
const jwt = require('jwt-simple');
let User = require('../models/user.model');

let validateUser = function(email, callback) {
    User.findOne({Email:email},function (err, user) {
        if(!user){
            callback(err,null);
            return;
        }

        let dbUserObj = {
            Name: user.name,
            Firstname: user.Firstname,
            Role: user.role,
            Email: user.email
        };
        callback(err,dbUserObj);
    });
};

module.exports = function(req, res, next) {
    let token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    let key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];

    if (token || key) {
        try {
            let decoded = jwt.decode(token, require('../helpers/secret.js')());

            if (decoded.exp <= Date.now()) {
                next(
                    res.status(403).json({
                        "status": 403,
                        "message": "Token expired"
                    })
                );
            }

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
                    next(
                        res.status(403).json({
                            "status": 403,
                            "message": "Invalid User"
                        })
                    );
                }
            });
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