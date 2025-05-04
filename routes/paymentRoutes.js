const express = require("express");
const  createOrder = require("../controllers/paymentControllers");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/create-order", auth, createOrder);

module.exports = router;
