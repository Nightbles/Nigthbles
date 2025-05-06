const pool = require('../db');

exports.createReservedBottle = async (req, res) => {
  const { reservation_id, bottle_id, quantity, total_price, note } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO reserved_bottles (reservation_id, bottle_id, quantity, total_price, note) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [reservation_id, bottle_id, quantity, total_price, note]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByReservation = async (req, res) => {
  const { reservation_id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM reserved_bottles WHERE reservation_id = $1',
      [reservation_id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
