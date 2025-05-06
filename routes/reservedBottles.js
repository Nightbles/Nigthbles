const express = require('express');
const router = express.Router();
const reservedBottleController = require('../controllers/reservedBottles');

router.post('/', reservedBottleController.createReservedBottle);
router.get('/reservation/:reservation_id', reservedBottleController.getByReservation);

module.exports = router;
