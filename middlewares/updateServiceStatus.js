const Admin = require("../models/Admin");
const Service = require("../models/Service");

const updateServiceStatus = async (req, res, next) => {
  const adminId = req.adminId; 

  try {
    const admin = await Admin.findById(adminId); 
    const now = new Date();

    if (admin && admin.subscriptionExpiresAt && admin.subscriptionExpiresAt < now) {
      await Service.updateMany({ adminId }, { isActive: false });
    }

    next(); 
  } catch (err) {
    console.error("Error checking subscription:", err);
    res.status(500).json({ message: "Server error checking subscription." });
  }
};

module.exports = updateServiceStatus;
