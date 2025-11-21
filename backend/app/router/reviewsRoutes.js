const { createReviewController, updateReviewController, getReviewsController } = require("../controllers/ReviewsController");
const { authentication } = require("../middleware/middleware");
const express = require("express");

const reviews = express.Router();

reviews.get("/api/review", getReviewsController);
reviews.post("/api/review", authentication, createReviewController);
reviews.post("/api/review/:id", authentication, updateReviewController);

module.exports = reviews;