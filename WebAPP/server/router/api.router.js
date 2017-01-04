/**
 * Created by Sander Verkaemer on 17/12/2016.
 */
"use strict";

const router = require('express').Router();
let bikeRouter = require('./bike.router'),
    maintenanceRouter = require('./maintenance.router'),
    userRouter = require('./user.router'),
    sessionRouter= require('./session.router');

router.get('/', function(req, res) {
    res.json({message:"The API works!"});
});

router.use('/bike', bikeRouter);
router.use('/maintenance', maintenanceRouter);
router.use('/user', userRouter);
router.use('/session', sessionRouter);

module.exports = router;