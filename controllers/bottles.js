const pool = require('../db');

exports.createBottle = async (req, res) => {
  const { event_id, name, price } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO bottles (event_id, name, price) VALUES ($1, $2, $3) RETURNING *',
      [event_id, name, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBottlesByEvent = async (req, res) => {
  const { event_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM bottles WHERE event_id = $1', [event_id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
