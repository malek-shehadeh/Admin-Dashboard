// const Reports = require("../models/reports");

// exports.getReports = async (req, res) => {
//   try {
//     const reports = await Reports.find();
//     res.status(200).json(reports);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching reports", error: err });
//   }
// };
//////////////////
const Reports = require("../models/reports");
const Users = require("../models/User");
const Dishes = require("../models/Dish");
const Recipes = require("../models/Recipe");
const Comments = require("../models/Comment");

exports.getReports = async (req, res) => {
  try {
    const reports = await Reports.find()
      .populate("reporterId", "username") // Populate user data
      .populate("dishId", "title") // Populate dish data
      .populate("recipeId", "name") // Populate recipe data
      .populate("commentId", "content"); // Populate comment data

    res.status(200).json(reports);
  } catch (err) {
    console.error("Error fetching reports:", err); // Log the error for debugging
    res
      .status(500)
      .json({ message: "Error fetching reports", error: err.message });
  }
};
