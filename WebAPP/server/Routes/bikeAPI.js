/**
 * Created by Sander Verkaemer on 27/11/2016.
 */

const router = require('express').Router();
let Bike     = require('../models/bike');
let User = require('../models/user');

router.route("/add").post(function (req, res) {
    let bike = new Bike();

    bike.Number = req.body.Number;
    bike.LockId = req.body.LockId;
    bike.Owner = req.body.Owner;
    bike.User = "Currently no user";
    bike.inMaintenance = true;

    Bike.findByNumber(bike.Number, function (err, returnedBike) {
        if (err)
            res.send(err);

        if (returnedBike == []) {
            res.send({'error': 'Bike already exists'});
            return;
        }

        bike.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Bike created!' });
        });

    });
});

router.route("/addUser").post(function (req, res) {
    console.log("(bikeAPI:37)");

    Bike.findById(req.body.id, function(err, bike) {
        if (err)
            res.send(err);

        User.findByEmail(req.body.email, function (err, user) {
            if (err)
                res.send(err);

            if(user == []) {
                res.send({"error":"No User"});
            }else {
                bike.User = user;
                bike.UnlockCode = "12345689";

                bike.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'User added' });
                });
            }
        });
    });
});

router.route("/removeUser/:bike_id").post(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err)
            res.send(err);

        bike.User = "";
        bike.LastLocation = "";
        bike.UnlockCode = "";

        bike.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User removed from bike!' });
        });
    });
});

router.route("/byOwner/:owner_id").get(function (req, res) {
    Bike.findByOwner(req.params.owner_id, function(err, bike) {
        if (err)
            res.send(err);
        res.json(bike);
    });
});

router.route("/byUser/:user_id").get(function (req, res) {
    Bike.findByUser(req.params.user_id, function(err, bike) {
        if (err)
            res.send(err);
        res.json(bike);
    });
});

router.route("/single/:bike_id").get(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err)
            res.send(err);
        res.json(bike);
    });
});

router.route("/toggleInMaintenance/:bike_id").post(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err)
            res.send(err);

        bike.inMaintenance = !bike.inMaintenance;

        bike.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'success' });
        });
    });
});

module.exports = router;