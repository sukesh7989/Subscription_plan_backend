const Service = require("../models/Service");

const updateRooms = async (req, res) => {
  const { serviceId } = req.params;
  const { noOfRooms } = req.body;

  try {
    const updated = await Service.findByIdAndUpdate(serviceId, { noOfRooms }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports =  updateRooms
