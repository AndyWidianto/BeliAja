
const express = require("express");
const { registerController, loginController, refreshTokenController } = require("../controllers/authController");
const { rateLimit, ipKeyGenerator } = require("express-rate-limit");
const { verifyCookie } = require("../middleware/middleware");

const ipLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  keyGenerator: (req) => ipKeyGenerator(req),
  handler: (req, res) => res.status(429).send('Terlalu banyak percobaan, coba nanti')
});

const auth = express.Router();

auth.post("/api/register", registerController);
auth.post("/api/login", ipLimiter, loginLimiter, loginController);
auth.get("/api/refresh", verifyCookie, refreshTokenController);

auth.get("test", (req, res) => {
  req.cookies
})

module.exports = auth;