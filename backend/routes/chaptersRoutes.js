// routes/booksRoutes.js

const express = require("express");
const router = express.Router();
const chaptersController = require("../controllers/chaptersController");

// Route handler for fetching all chapters
router.get("/", chaptersController.getAllChapters);

module.exports = router;
