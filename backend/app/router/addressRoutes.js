const express = require("express");
const { authentication } = require("../middleware/middleware");
const { getAddressController, createAddressController, deleteAddressController, updateAddressController } = require("../controllers/addressController");

const address = express.Router();

address.get("/api/address", authentication, getAddressController);
address.post("/api/address", authentication, createAddressController);
address.delete("/api/address/:id", authentication, deleteAddressController);
address.post("/api/address/:id", authentication, updateAddressController);

module.exports = address;