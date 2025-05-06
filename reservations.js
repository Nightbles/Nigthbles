const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservations');

router.post('/', reservationController.createReservation);
router.get('/user/:user_id', reservationController.getReservationsByUser);

module.exports = router;
