const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  farmName: String,
  location: String,
  farmSize: String,
  soilType: String,
  language: { type: String, default: "English" },
  role: { type: String, default: "farmer" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
