const express = require("express");
const { getProfileController, createProfileController, updateProfileController } = require("../controllers/profilesController");
const { authentication } = require("../middleware/middleware");

const profiles = express.Router();

profiles.get("/api/profile/:id", getProfileController);
profiles.post("/api/profile", authentication, createProfileController);
profiles.put("/api/profile/", authentication, updateProfileController);

module.exports = profiles;