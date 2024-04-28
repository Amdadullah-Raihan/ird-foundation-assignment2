// hadithController.js

const db = require("../connectDB");

// Controller method for retrieving all hadith
const getAllHadith = (req, res) => {
  db.all("SELECT * FROM hadith", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ hadith: rows });
    }
  });
};

module.exports = {
  getAllHadith,
};
