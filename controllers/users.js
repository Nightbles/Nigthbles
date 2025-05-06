const pool = require('../db');

// Create a new user
exports.createUser = async (req, res) => {
  const { email, password_hash, full_name, phone_number } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (email, password_hash, full_name, phone_number) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, password_hash, full_name, phone_number]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Users empty' });
    }
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  let { id } = req.params;
  id = id.slice(1);
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getUserByName = async (req, res) => {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Parametro di ricerca mancante (q)' });
    }
  
    try {
      const result = await pool.query(
        'SELECT * FROM users WHERE full_name ILIKE $1',
        [`%${q}%`]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Errore interno del server' });
    }  
};


