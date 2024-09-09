// routes/orderInfoRoutes.js
const express = require("express");
const router = express.Router();
const { getOrderInfo } = require("../controllers/orderscontroller");

router.get("/", getOrderInfo);

module.exports = router;
