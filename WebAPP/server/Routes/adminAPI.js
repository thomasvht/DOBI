/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
const router = require('express').Router();
let Bike     = require('../models/bike');
let Maintenance     = require('../models/maintenance');
let Session     = require('../models/session');
let User = require('../models/user');
let jwt = require('jwt-simple');

router.route("/bike")
    .post(function(req, res) {
        let bike = new Bike();

        bike.LockId = req.body.LockId;
        bike.Owner = req.body.Owner;
        bike.User = req.body.User;
        bike.LastLocation = req.body.LastLocation;
        bike.CurrentStatus = req.body.CurrentStatus;
        bike.UnlockCode = req.body.UnlockCode;

        bike.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Bike created!' });
        });
    })
    .get(function(req, res) {
        Bike.find(function(err, bikes) {
            if (err)
                res.send(err);

            res.json(bikes);
        });
    });

router.route("/maintenance").get(function(req, res) {
    Maintenance.find(function (err, locks) {
        if (err)
            res.send(err);

        res.json(locks);
    });
});

router.route("/session").get(function(req, res) {
    Session.find(function(err, sessions) {
        if (err)
            res.send(err);

        res.json(sessions);
    });
});

router.route("/user")
    .post(function (req, res) {
        let user = req.body;

        let newUser = new User({
            firstname: user.firstname,
            name: user.firstname,
            email: user.email,
            password: user.password,
            role: user.role
        });

        newUser.save(function(err){
            res.json(genToken(user));
        });
    })

    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });
module.exports = router;

function genToken(user) {
    let expires = expiresIn(8); // 7 days
    let token = jwt.encode({
        exp: expires
    }, require('../config/secret')());

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