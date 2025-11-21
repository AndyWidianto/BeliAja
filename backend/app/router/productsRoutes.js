const express = require("express");
const { authentication } = require("../middleware/middleware");
const { createProductController, updateProductController, getProductsController, getProductController, deleteProductController, deleteProductsController } = require("../controllers/productsController");
const upload = require("../untils/multer");

const products = express.Router();

products.post("/api/product", authentication, upload.single("image"), createProductController);
products.post("/api/product/:id", authentication, upload.single("image"), updateProductController);
products.get("/api/products", getProductsController);
products.get("/api/product", getProductController);
products.delete("/api/product/:id", authentication, deleteProductController);
products.post("/api/products/delete", authentication, deleteProductsController);


module.exports = products;
