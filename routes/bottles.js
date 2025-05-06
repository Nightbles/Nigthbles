const express = require('express');
const router = express.Router();
const bottleController = require('../controllers/bottles');

router.post('/', bottleController.createBottle);
router.get('/event/:event_id', bottleController.getBottlesByEvent);

module.exports = router;
