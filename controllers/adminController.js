const Admin = require('../models/Admin')
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");
const dotenv = require('dotenv')

dotenv.config()

const signup = async (req, res) => {
    try {
      const { email, password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({ email, password: hash });
      await newAdmin.save();
      res.status(201).json({ message: "Admin registered" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin) return res.status(404).json({ message: "Admin not found" });
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
      res.json({ token, admin });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  module.exports = { signup, login }