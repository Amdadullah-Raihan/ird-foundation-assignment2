const db = require("../connectDB");

const getAllChapters = (req, res) => {
  // Query to get all chapters
  db.all("SELECT * FROM chapter", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Send the list of chapters as JSON response
      res.json({ chapters: rows });
    }
  });
};

module.exports = {
  getAllChapters,
};
