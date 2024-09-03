// backend/controllers/recipeController.js
const Recipe = require("../models/Recipe");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.approveRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { isApproved: true },
      { new: true }
    );
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    await Recipe.findByIdAndDelete(recipeId);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
