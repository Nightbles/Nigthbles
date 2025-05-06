const pool = require('../db');

exports.createReservation = async (req, res) => {
  const { user_id, ticket_id, table_id, quantity, total_price, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO reservations (user_id, ticket_id, table_id, quantity, total_price, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, ticket_id, table_id, quantity, total_price, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReservationsByUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM reservations WHERE user_id = $1', [user_id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
