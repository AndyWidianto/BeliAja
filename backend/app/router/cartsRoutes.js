const express = require("express");
const { getCartController, createCartController, deleteCartController } = require("../controllers/cartsController");
const { authentication } = require("../middleware/middleware");

const carts = express.Router();

carts.get("/api/cart", getCartController);
carts.post("/api/cart", authentication, createCartController);
carts.delete("/api/cart/:id", authentication, deleteCartController);

module.exports = carts;