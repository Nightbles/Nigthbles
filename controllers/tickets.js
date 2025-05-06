const pool = require('../db');

exports.createTicket = async (req, res) => {
  const { event_id, name, price, available_quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tickets (event_id, name, price, available_quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [event_id, name, price, available_quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTicketsByEvent = async (req, res) => {
  const { event_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM tickets WHERE event_id = $1', [event_id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
