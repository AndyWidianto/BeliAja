const express = require("express");
const { authentication } = require("../middleware/middleware");
const { createCategoryController, updateCategoryController, deleteCategoryController, getCategoriesController } = require("../controllers/categoiresController");


const categories = express.Router();
categories.post("/api/category", authentication, createCategoryController);
categories.post("/api/category/:id", authentication, updateCategoryController);
categories.delete("/api/category:id", authentication, deleteCategoryController);
categories.get("/api/categories", getCategoriesController);


module.exports = categories;