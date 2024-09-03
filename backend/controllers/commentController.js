// backend/controllers/commentController.js
const Comment = require("../models/Comment");

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("userId", "username");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    await Comment.findByIdAndUpdate(commentId, { isDeleted: true });
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
