// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Get all users
router.get("/", (req, res) => {
  console.log("GET /api/users route hit");
  userController.getUsers(req, res);
});

// Update user status
router.put("/:userId/status", (req, res) => {
  console.log("PUT /api/users/:userId/status route hit");
  userController.updateUserStatus(req, res);
});

module.exports = router;
