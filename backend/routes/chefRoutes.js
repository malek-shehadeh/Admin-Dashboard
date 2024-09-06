const express = require("express");
const router = express.Router();
const chefController = require("../controllers/chefController");

// Get all chefs
router.get("/chefs", chefController.getAllChefs);

// Approve a chef
router.patch("/chefs/:id/approve", chefController.approveChef);

// Disapprove a chef
router.patch("/chefs/:id/disapprove", chefController.disapproveChef);

module.exports = router;
