/**
 * Created by Sander Verkaemer on 27/11/2016.
 */

const router = require('express').Router();
let Maintenance     = require('../app/models/maintenance');

router.route("/add").post(function (req, res) {
    let maintenance = new Maintenance();

    maintenance.BikeId = req.body.bikeId;
    maintenance.Date = new Date(Date.now()).toLocaleString();
    maintenance.Mechanic = req.body.mechanic;
    maintenance.Description = req.body.description;
    maintenance.Price = "€" + req.body.price;

    maintenance.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Maintenance added!' });
    });
});

router.route("/:bike_id")
    .get(function (req, res) {
        Maintenance.findByBikeId(req.params.bike_id,function (err, locks) {
            if (err)
                res.send(err);

            res.json(locks);
        });
    });

module.exports = router;