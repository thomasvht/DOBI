/**
 * Created by Sander Verkaemer on 19/12/2016.
 */
const router = require('express').Router();

let User = require('../models/user.model'),
    Session = require('../models/session.model'),
    Bike = require('../models/bike.model'),
    helpers = require('../helpers/helpers');

router.route('/add').post(function (req, res) {
    let session = req.body;

    if(!session.Owner || !session.User || !session.TimeFrom || !session.TimeTo || !session.BikeId){
        return res.json({"error":"Not all fields are completed"});
    }

    let NewSession = new Session();

    NewSession.Owner = session.Owner;
    NewSession.User = session.User;
    NewSession.TimeFrom = new Date(session.TimeFrom);
    NewSession.TimeTo = new Date(session.TimeTo);
    NewSession.BikeId = session.BikeId;

    Bike.findById(Session.BikeId, function (err, returnedBike) {
        if (err){
            helpers.handleError(err);
            res.json({ 'error': "There went something wrong"});
        }

        if (returnedBike) {
            res.json({ 'error': "Bike already exists"});
            return;
        }

        User.findByEmail(NewSession.Owner,function (err, user) {
            if (err){
                helpers.handleError(err);
                return res.json({ 'error': "There went something wrong"});
            }

            if (!user) {
                return res.json({ 'error': "Owner not found"});
            }
        });

        User.findByEmail(NewSession.User,function (err, user) {
            if (err){
                helpers.handleError(err);
                return res.json({ 'error': "There went something wrong"});
            }

            if (!user) {
                return res.json({ 'error': "User not found"});
            }
        });

        NewSession.save(function(err) {
            if (err){
                helpers.handleError(err);
                return res.json({ 'error': "There went something wrong"});
            }
            return res.json({ 'message': 'Session created!' });
        });

    });
});

router.route('/byOwner/:owner').get(function (req, res) {
    User.findByEmail(req.params.owner,function (err, user) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }

        if(!user){
            return res.json({"error":"User not found"});

        }

        Session.findByOwner(req.params.owner, function (err, session) {
            if (err){
                helpers.handleError(err);
                return res.json({"error":"Something went wrong!"});
            }

            return res.json(session);
        })
    })
});
router.route('/byUser/:user').get(function (req, res) {
    User.findByEmail(req.params.user,function (err, user) {
        if (err){
            helpers.handleError(err);
            res.json({"error":"Something went wrong!"});
            return;
        }

        if(!user){
            return res.json({"error":"User not found"});

        }

        Session.findByUser(req.params.user, function (err, session) {
            if (err){
                helpers.handleError(err);
                return res.json({"error":"Something went wrong!"});
            }

            return res.json(session);
        })
    })
});

router.route('/getKey/:bikeId/:user').get(function (req, res) {
    User.findByEmail(req.params.user,function (err, user) {
        if (err) {
            helpers.handleError(err);
            res.json({"error": "Something went wrong!"});
            return;
        }

        if (!user) {
            return res.json({"error": "User not found"});

        }
        Bike.findById(req.params.bikeId, function (err, bike) {
            if (err) {
                helpers.handleError(err);
                res.json({"error": "Something went wrong!"});
                return;
            }

            if (!bike) {
                return res.json({"error": "Bike not found"});
            }

            if(req.params.user == bike.Owner){
                return res.json({"unlockCode": bike.UnlockCode});
            }

            Session.findByUser(req.params.user, function (err, session) {
                if (err){
                    helpers.handleError(err);
                    return res.json({"error":"Something went wrong!"});
                }

                for(i=0;i<session.length;i++){
                    if(session[i].BikeId == req.params.bikeId){
                        let now = new Date(Date.now());
                        if(session[i].TimeFrom < now && now < session[i].TimeTo) {
                            return res.json({"unlockCode": bike.UnlockCode});
                        }
                    }else{
                        return res.json({"error": "No valid sessions"});
                    }
                }
            })
        });
    });
});
module.exports = router;