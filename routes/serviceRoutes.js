const express = require("express");
const updateRooms = require("../controllers/serviceController");
const createService = require("../controllers/createService")
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/create", auth, createService);
router.put("/update-rooms/:serviceId", auth, updateRooms);

module.exports = router;
