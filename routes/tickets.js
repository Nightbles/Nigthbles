const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tickets');

router.post('/', ticketController.createTicket);
router.get('/event/:event_id', ticketController.getTicketsByEvent);

module.exports = router;
