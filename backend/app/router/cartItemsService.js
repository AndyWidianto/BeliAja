const express = require("express");
const { authentication } = require("../middleware/middleware");
const { CreateCartItemController, deleteCartItemController } = require("../controllers/cartItemsController");

const cartItem = express.Router();

cartItem.post("/api/cart-item", authentication, CreateCartItemController);
cartItem.delete("/api/cart-item/:id", authentication, deleteCartItemController);

module.exports = cartItem;