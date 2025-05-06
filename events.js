const express = require('express');
const router = express.Router();
const eventController = require('../controllers/events');

router.post('/', eventController.createEvent);
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

module.exports = router;
