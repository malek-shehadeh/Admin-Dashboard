// backend/models/Comment.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dishId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
      required: true,
    },
    content: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
