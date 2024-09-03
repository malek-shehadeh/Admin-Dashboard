// // backend/models/Dish.js
// const mongoose = require("mongoose");

// const dishSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     title: { type: String, required: true },
//     description: { type: String },
//     category: { type: String, required: true },
//     ingredients: [{ type: String, required: true }],
//     price: { type: Number, required: true },
//     imageUrl: { type: String },
//     isApproved: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Dish", dishSchema);
///////////
const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema(
  {
    chefId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chefs",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String }, // Added image URL field
    isDeleted: { type: Boolean, default: false },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dishes", dishesSchema, "dishes");
