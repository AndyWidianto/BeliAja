const express = require("express");
const { authentication } = require("../middleware/middleware");
const { getPaymentMethodsController, createPaymentMethodController, updatePaymentMethodController, deletePaymentMethodController } = require("../controllers/paymentMethodsController");

const paymentMethod = express.Router();

paymentMethod.get("/api/payment-methods", authentication, getPaymentMethodsController);
paymentMethod.post("/api/payment-method", authentication, createPaymentMethodController);
paymentMethod.post("/api/payment-method/:id", authentication, updatePaymentMethodController);
paymentMethod.delete("/api/payment-method/:id", authentication, deletePaymentMethodController);

module.exports = paymentMethod;