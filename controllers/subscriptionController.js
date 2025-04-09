const Admin = require("../models/Admin");

const subscribe = async (req, res) => {
  const adminId = req.adminId;
  const months = req.body.months || 12;

  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + months);

  await Admin.findByIdAndUpdate(adminId, { subscriptionExpiresAt: expiresAt });

  res.json({ message: "Subscription activated", expiresAt });
};

module.exports = subscribe;
