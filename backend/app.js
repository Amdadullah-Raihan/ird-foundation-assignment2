const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const sqlite3 = require("sqlite3").verbose();

app.use(express.json());
app.use(cors());

// Connect to the SQLite database
const db = new sqlite3.Database("./hadith_db.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

// Route handler for retrieving all tables
app.get("/tables", (req, res) => {
  // Query to get list of tables
  db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Extract table names from query result
      const tables = rows.map((row) => row.name);
      // Send the list of tables as JSON response
      res.json({ tables });
    }
  });
});

//Default route
app.get("/", (req, res) => {
  res.send("The iHadis server is running on port " + port);
});

// Route handler for retrieving all books
app.get("/books", (req, res) => {
  // Query to get all books
  db.all("SELECT * FROM books", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Send the list of books as JSON response
      res.json({ books: rows });
    }
  });
});

// Route handler for retrieving all chapters
app.get("/chapter", (req, res) => {
  // Query to get all books
  db.all("SELECT * FROM chapter", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Send the list of books as JSON response
      res.json({ chapter: rows });
    }
  });
});
// Route handler for retrieving all hadith
app.get("/hadith", (req, res) => {
  // Query to get all books
  db.all("SELECT * FROM hadith", (err, rows) => {
    if (err) {
      console.error("Error querying database:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Send the list of books as JSON response
      res.json({ hadith: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`iHadis app listening on port ${port}`);
});
