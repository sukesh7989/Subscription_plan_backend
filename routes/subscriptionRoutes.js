const express = require("express");
const subscribe = require("../controllers/subscriptionController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, subscribe);

module.exports = router;