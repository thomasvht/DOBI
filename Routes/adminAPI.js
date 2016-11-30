/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
const router = require('express').Router();
let Bike     = require('../app/models/bike');
let Maintenance     = require('../app/models/maintenance');
let Session     = require('../app/models/session');

router.route("/bike")
    .post(function(req, res) {
        let bike = new Bike();

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
        Bike.find(function(err, locks) {
            if (err)
                res.send(err);

            res.json(locks);
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
module.exports = router;