const express = require("express");
const { authentication } = require("../middleware/middleware");
const { getPaymentMethodsController, createPaymentMethodController, updatePaymentMethodController, deletePaymentMethodController, deletePaymentMethodsController } = require("../controllers/paymentMethodsController");
const upload = require("../untils/multer");

const paymentMethod = express.Router();

paymentMethod.get("/api/payment-methods", getPaymentMethodsController);
paymentMethod.post("/api/payment-method", authentication, upload.single("logo_url"), createPaymentMethodController);
paymentMethod.post("/api/payment-method/:id", authentication, upload.single("logo_url"), updatePaymentMethodController);
paymentMethod.delete("/api/payment-method/:id", authentication, deletePaymentMethodController);
paymentMethod.post("/api/delete/payment-methods", authentication, deletePaymentMethodsController);

module.exports = paymentMethod;