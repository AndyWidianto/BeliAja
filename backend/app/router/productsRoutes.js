const express = require("express");
const { authentication } = require("../middleware/middleware");
const { createProductController, updateProductController, getProductsController, getProductController, deleteProductController } = require("../controllers/productsController");

const products = express.Router();

products.post("/api/product", authentication, createProductController);
products.post("/api/product/:id", authentication, updateProductController);
products.get("/api/products", getProductsController);
products.get("/api/product", getProductController);
products.delete("/api/product/:id", authentication, deleteProductController);


module.exports = products;
