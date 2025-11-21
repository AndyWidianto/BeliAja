const express = require("express");
const { authentication } = require("../middleware/middleware");
const { createVariantProductController, getVariantsProductController, updateVariantProductController, deleteVariantProductController, deleteVariantsProductController } = require("../controllers/productVariantsController");
const upload = require("../untils/multer");

const variant = express.Router();

variant.post("/api/variant-product", authentication, upload.single("image"), createVariantProductController);
variant.get("/api/variants-product", getVariantsProductController);
variant.post("/api/variant-product/:id", authentication, upload.single("image"), updateVariantProductController);
variant.delete("/api/variant-product/:id", authentication, deleteVariantProductController);
variant.post("/api/delete/variants-product", authentication, deleteVariantsProductController);


module.exports = variant;