const express = require('express');
const router = express.Router();
const {InfoController,BookingController} = require('../../controllers');

const bookingRoutes = require('./booking-routes');

router.get('/info',InfoController.info);

router.use('/bookings',bookingRoutes);

module.exports = router;