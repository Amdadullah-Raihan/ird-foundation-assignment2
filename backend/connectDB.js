const sqlite3 = require("sqlite3").verbose();

const dbPath = "./hadith_db.db";

// Connect to the database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;
