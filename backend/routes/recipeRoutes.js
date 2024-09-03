// backend/routes/recipeRoutes.js
const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.getAllRecipes);
router.put("/approve/:recipeId", recipeController.approveRecipe);
router.delete("/:recipeId", recipeController.deleteRecipe);

module.exports = router;
