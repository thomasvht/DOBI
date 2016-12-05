/**
 * Created by Sander Verkaemer on 27/11/2016.
 */

const router = require('express').Router();
let Bike     = require('../models/bike');

router.route("/add").post(function (req, res) {
    let bike = new Bike();

    bike.LockId = req.body.LockId;
    bike.Owner = req.body.owner;

    bike.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Bike created!' });
    });
});

router.route("/addUser").post(function (req, res) {
    Bike.findById(req.body.id, function(err, bike) {
        if (err)
            res.send(err);

        bike.User = req.body.user;
        bike.UnlockCode = req.body.unlockCode;

        bike.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User added!' });
        });
    });
});

router.route("/removeUser/:bike_id").post(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err)
            res.send(err);

        bike.User = "";
        bike.LastLocation = "";
        bike.CurrentStatus = "";
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

module.exports = router;
