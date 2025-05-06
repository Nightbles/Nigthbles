const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nightbles',
  password: '3hsj7k#s5afaf', // Cambia con la tua password
  port: 5432,
});
pool.connect()
  .then(() => console.log("✅ Connessione al DB riuscita!"))
  .catch(err => console.error("❌ Errore connessione DB:", err));
  
module.exports = pool;
