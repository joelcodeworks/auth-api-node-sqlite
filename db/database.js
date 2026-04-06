const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error al conectar a la DB:", err.message);
  } else {
    console.log("Conectado a SQLite");
  }
});

module.exports = db;