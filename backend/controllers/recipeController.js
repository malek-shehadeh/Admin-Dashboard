// // backend/controllers/recipeController.js
// const Recipe = require("../models/Recipe");

// exports.getAllRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.json(recipes);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.approveRecipe = async (req, res) => {
//   try {
//     const { recipeId } = req.params;
//     const recipe = await Recipe.findByIdAndUpdate(
//       recipeId,
//       { isApproved: true },
//       { new: true }
//     );
//     res.json(recipe);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

// exports.deleteRecipe = async (req, res) => {
//   try {
//     const { recipeId } = req.params;
//     await Recipe.findByIdAndDelete(recipeId);
//     res.json({ message: "Recipe deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };
///////////////
const Recipe = require("../models/Recipe");

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ isDeleted: false });
    res.status(200).json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching recipes", error: error.message });
  }
};

exports.toggleApproval = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    recipe.approved = !recipe.approved;
    await recipe.save();
    res.status(200).json(recipe);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error toggling approval", error: error.message });
  }
};
