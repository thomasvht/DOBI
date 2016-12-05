/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
const router = require('express').Router();
let Session     = require('../models/session');

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

module.exports = router;