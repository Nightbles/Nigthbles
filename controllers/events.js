const pool = require('../db');

exports.createEvent = async (req, res) => {
  const { club_id, name, description, event_date, music_genre, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (club_id, name, description, event_date, music_genre, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [club_id, name, description, event_date, music_genre, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
