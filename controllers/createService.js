const Service = require("../models/Service");

const createService = async (req, res) => {
  const { name, noOfRooms } = req.body;
  const adminId = req.adminId;

  try {
    const newService = new Service({
      adminId,
      name,
      noOfRooms,
      isActive: true,
    });

    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = createService;
