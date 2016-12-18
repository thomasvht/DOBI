/**
 * Created by Sander Verkaemer on 27/11/2016.
 */
const router = require('express').Router();

let adminAPI = require("./adminAPI");
let bikeAPI = require("./bikeAPI");
let maintenanceAPI = require("./maintenanceAPI");
let sessionAPI = require("./sessionAPI");
let userAPI = require("./userAPI");

router.get('/', function(req, res) {
    res.json({message:"The API works!"});
});

router.use("/admin", adminAPI);
router.use('/bike', bikeAPI);
router.use('/maintenance', maintenanceAPI);
router.use('/session', sessionAPI);
router.use('/user', userAPI);

module.exports = router;