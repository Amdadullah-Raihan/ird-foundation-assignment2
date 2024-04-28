const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Import routes
const booksRoutes = require("./routes/booksRoutes");
const chaptersRoutes = require("./routes/chaptersRoutes");
const hadithRoutes = require("./routes/hadithRoutes");
const sectionRoutes = require("./routes/sectionRoutes");

// Import and initialize the database connection
const db = require("./connectDB");

app.use(express.json());
app.use(cors());

// Route handler for retrieving all tables (for testing purposes)
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

// Root route
app.get("/", (req, res) => {
  res.send("The iHadis server is running on port " + port);
});

// Mount routes
app.use("/books", booksRoutes);
app.use("/chapters", chaptersRoutes); // Consider using plural form for consistency
app.use("/hadith", hadithRoutes);
app.use("/section", sectionRoutes);

// Listen for requests
app.listen(port, () => {
  console.log(`iHadis app listening on port ${port}`);
});
