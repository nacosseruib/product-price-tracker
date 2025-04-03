// src/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const { setPriceAlert, checkPrice } = require("../controllers/productController");


router.post("/set-price-alert", setPriceAlert);
router.get("/check-price", checkPrice);

module.exports = router;