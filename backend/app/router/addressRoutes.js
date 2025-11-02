const express = require("express");
const { authentication } = require("../middleware/middleware");
const { getAddressController, createAddressController } = require("../controllers/addressController");

const address = express.Router();

address.get("/api/address", authentication, getAddressController);
address.post("/api/address", authentication, createAddressController);

module.exports = address;