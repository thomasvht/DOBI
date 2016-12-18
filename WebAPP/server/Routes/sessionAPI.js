/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
const router = require('express').Router();
let Session = require('../models/session');
let Bike = require('../models/bike');

router.route("/add").post(function (req, res) {
    let session = new Session();

    session.Owner = req.body.owner;
    session.User = req.body.user;
    session.BikeId = req.body.bikeId;
    session.DateFrom = new Date(req.body.dateFrom).toLocaleString();
    session.DateTo = new Date(req.body.dateTo).toLocaleString();

    session.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Session created!' });
    });
});

router.route("/getKey/:bike_id").get(function (req, res) {
    Bike.findByLockId(req.params.bike_id, function(err, bike) {
        if (err)
            res.json({ error: err });

        if(!bike)
            res.json({ error: "No such bike"});

        res.json({"key": bike[0].UnlockCode});
    });
});

module.exports = router;