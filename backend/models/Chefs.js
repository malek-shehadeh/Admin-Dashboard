const mongoose = require("mongoose");

const chefsSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
});

module.exports = mongoose.model("Chefs", chefsSchema, "chefs");
