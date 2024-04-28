// sectionController.js

const db = require("../connectDB");

// Controller method for retrieving all sections
const getAllSections = (req, res) => {
  db.all("SELECT * FROM section", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ section: rows });
    }
  });
};

module.exports = {
  getAllSections,
};
