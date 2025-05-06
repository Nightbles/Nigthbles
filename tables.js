const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tables');

router.post('/', tableController.createTable);
router.get('/event/:event_id', tableController.getTablesByEvent);

module.exports = router;
