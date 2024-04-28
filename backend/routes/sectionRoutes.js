// sectionRoutes.js

const express = require("express");
const router = express.Router();
const sectionController = require("../controllers/sectionController");

// Route for retrieving all sections
router.get("/", sectionController.getAllSections);

module.exports = router;
