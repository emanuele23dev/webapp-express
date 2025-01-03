const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/MovieController.js");

router.get("/", MovieController.index);

router.get("/:id", MovieController.show);

router.post("/:id/review", MovieController.review);

module.exports = router;
