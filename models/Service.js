const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  name: String,
  isActive: { type: Boolean, default: true },
  noOfRooms: { type: Number, default: 0 },
});

module.exports = mongoose.model("Service", serviceSchema);
