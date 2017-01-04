/**
 * Created by Sander Verkaemer on 17/12/2016.
 */

"use strict";

const router = require('express').Router();

let Bike = require('../models/bike.model'),
    User = require('../models/user.model'),
    helpers = require('../helpers/helpers');

router.route("/add").post(function (req, res) {
    if(!req.body.Number || !req.body.LockId || !req.body.Owner || !req.body.UnlockCode){
        res.json({"error":"Not all fields are completed"});
        return;
    }

    let bike = new Bike();

    bike.Number = req.body.Number;
    bike.LockId = req.body.LockId;
    bike.Owner = req.body.Owner;
    bike.UnlockCode = req.body.UnlockCode;

    Bike.findByNumber(bike.Number, function (err, returnedBike) {
        if (err){
            helpers.handleError(err);
            res.json({ 'error': "There went something wrong"});
        }

        if (returnedBike) {
            res.json({ 'error': "Bike already exists"});
            return;
        }

        bike.save(function(err) {
            if (err){
                helpers.handleError(err);
                res.json({ 'error': "There went something wrong"});
            }
            res.json({ 'message': 'Bike created!' });
        });

    });
});
router.route("/addUser").post(function (req, res) {
    if(!req.body.Id || !req.body.Email)
        return res.json({ 'error': "Not all fields are completed"});

    Bike.findById(req.body.Id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.json({ 'error': "There went something wrong"});
            return;
        }

        if(!bike){
            res.json({ 'error': "No such bike found"});
            return;
        }

        User.findByEmail(req.body.Email, function (err, user) {
            if (err){
                helpers.handleError(err);
                res.json({ 'error': "There went something wrong"});
                return;
            }

            if(!user){
                res.json({ 'error': "User not found"});
            }else {
                bike.User = {
                    "Firstname":user.Firstname,
                    "Name":user.Name,
                    "Email":user.Email
                };

                bike.save(function(err) {
                    if (err){
                        helpers.handleError(err);
                        res.json({ 'error': "There went something wrong"});
                    }

                    res.json({ 'message': 'User added' });
                });
            }
        });
    });
});
router.route("/removeUser/:bike_id").post(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }

        if(!bike){
            res.json({"error":"No bike found"});
            return;
        }

        bike.User = undefined;

        bike.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User removed from bike!' });
        });
    });
});
router.route("/updateLocation/:bike_id").post(function (req, res) {
    Bike.findByLockId(req.params.bike_id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }

        if(!bike){
            res.json({"error":"No bike found"});
            return;
        }

        bike.LastLocation = req.body.LastLocation;

        bike.save(function(err) {
            if (err)
                res.send(err);

            require('../socket/sockets').bikeMoved(bike.LastLocation);
            res.json({ message: 'Location updated!' });
        });
    });
});

router.route("/byOwner/:owner_id").get(function (req, res) {
    Bike.findByOwner(req.params.owner_id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }
        res.json(bike);
    });
});
router.route("/byUser/:user_id").get(function (req, res) {
    Bike.findByUser(req.params.user_id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }
        res.json(bike);
    });
});
router.route("/single/:bike_id").get(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }
        res.json(bike);
    });
});

router.route("/toggleInMaintenance/:bike_id").post(function (req, res) {
    Bike.findById(req.params.bike_id, function(err, bike) {
        if (err){
            helpers.handleError(err);
            res.send({"error":"Something went wrong!"});
            return;
        }
        if(!bike){
            res.send({"error":"No such bike"});
            return;
        }

        bike.inMaintenance = !bike.inMaintenance;

        bike.save(function(err) {
            if (err){
                helpers.handleError(err);
                res.json({"error":"Something went wrong!"});
                return;
            }

            res.send({ 'status': bike.inMaintenance });
        });
    });
});

module.exports = router;