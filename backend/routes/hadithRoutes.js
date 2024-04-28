// hadithRoutes.js

const express = require("express");
const router = express.Router();
const hadithController = require("../controllers/hadithController");

// Route for retrieving all hadith
router.get("/", hadithController.getAllHadith);

module.exports = router;
