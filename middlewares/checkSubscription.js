const Admin = require('../models/Admin')

const checkSubscription = async (req, res, next) => {
  const adminId = req.adminId; // set from auth middleware
  const admin = await Admin.findById(adminId);
  const now = new Date();

  if (!admin || !admin.subscriptionExpiresAt || admin.subscriptionExpiresAt < now) {
    return res.status(403).json({ message: "Subscription expired" });
  }

  next();
};

module.exports = checkSubscription;
