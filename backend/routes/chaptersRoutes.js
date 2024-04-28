// routes/booksRoutes.js

const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Route handler for fetching all books
router.get("/", booksController.getAllBooks);

module.exports = router;
