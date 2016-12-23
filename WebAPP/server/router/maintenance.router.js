/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
const router = require('express').Router();
let Maintenance = require('../models/maintenance.model'),
    helper = require('../helpers/helpers');
    Bike = require('../models/bike.model');

router.route("/add").post(function (req, res) {
    if(!req.body.BikeId || !req.body.Mechanic || !req.body.Description || !req.body.Price) {
        res.json({"error": "Not all fields are completed"});
        return;
    }

    if(req.body.Price < 0){
        res.json({"error": "Price must be 0 or more"});
        return;
    }

    Bike.findById(req.body.BikeId, function (err, returnedBike) {
        if (err){
            helper.handleError(err);
            res.json({"error": "Something went wrong"});
            return;
        }

        if(!returnedBike){
            res.json({"error": "Bike not found"});
        }else{
            let maintenance = new Maintenance();

            maintenance.BikeId = req.body.BikeId;
            maintenance.Mechanic = req.body.Mechanic;
            maintenance.Description = req.body.Description;
            maintenance.Price = "€" + req.body.Price;

            maintenance.save(function(err) {
                if (err){
                    helper.handleError(err);
                    res.json({"error": "Something went wrong"});
                }else
                    res.json({ 'message': 'Maintenance added!' });
            });
        }
    });
});

router.route("/:bike_id").get(function (req, res) {
        Maintenance.findByBikeId(req.params.bike_id,function (err, locks) {
            if (err){
                helper.handleError(err);
                return res.send({"error":"Something went wrong!"});
            }else{
                return res.send(locks);
            }
        });
    });

module.exports = router;