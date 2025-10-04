
const express = require("express");
const { getUsersController } = require("../controllers/userscontroller");

const users = express.Router();

users.get("/api/users", getUsersController);

module.exports = users;