
const express = require("express");
const { registerController, loginController } = require("../controllers/authController");

const auth = express.Router();

auth.post("/api/register", registerController);
auth.post("/api/login", loginController);

module.exports = auth;