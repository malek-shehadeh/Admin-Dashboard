// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users fetched:", users); // Add logging
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error); // Add error logging
    res.status(500).json({ message: error.message });
  }
});

// Update user status
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.isActive = !user.isActive; // Toggle status
    await user.save();
    res.json(user);
  } catch (error) {
    console.error("Error updating user status:", error); // Add error logging
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
