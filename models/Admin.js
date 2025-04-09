const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscriptionExpiresAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Admin", adminSchema); 
