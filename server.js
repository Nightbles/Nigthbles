const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nightbles',
  password: 'password', // Cambia con la tua password
  port: 5432,
});

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Nightbles API is running 🚀');
});

app.listen(port, () => {
  console.log(`Nightbles API listening on port ${port}`);
});
