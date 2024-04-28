// controllers/booksController.js

const db = require("../connectDB");

const getAllBooks = (req, res) => {
  // Query to get all books from the database
  db.all("SELECT * FROM books", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Send the list of books as JSON response
      res.json({ books: rows });
    }
  });
};

// Export the controller function(s) to be used in routes
module.exports = {
  getAllBooks,
};
