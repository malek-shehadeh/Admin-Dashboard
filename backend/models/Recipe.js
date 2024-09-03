// backend/models/Recipe.js
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    cookTime: { type: Number, required: true },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
