
const express = require("express");
const { getUsersController, createUserController, updateUserController, deleteUserController, deleteUsersController } = require("../controllers/userscontroller");
const { authentication } = require("../middleware/middleware");

const users = express.Router();

users.get("/api/users", authentication, getUsersController);
users.post("/api/user", authentication, createUserController);
users.post("/api/user/:id", authentication, updateUserController);
users.delete("/api/user/:id", authentication, deleteUserController);
users.post("/api/delete/users", authentication, deleteUsersController);

module.exports = users;