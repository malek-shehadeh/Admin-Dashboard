const Chefs = require("../models/Chefs");

exports.getAllChefs = async (req, res) => {
  try {
    const chefs = await Chefs.find();
    res.status(200).json(chefs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching chefs", error: err });
  }
};

exports.approveChef = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedChef = await Chefs.findByIdAndUpdate(
      id,
      { isApproved: true },
      { new: true }
    );
    if (!updatedChef) {
      return res.status(404).json({ message: "Chef not found" });
    }
    res.status(200).json(updatedChef);
  } catch (err) {
    res.status(500).json({ message: "Error approving chef", error: err });
  }
};

exports.disapproveChef = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedChef = await Chefs.findByIdAndUpdate(
      id,
      { isApproved: false },
      { new: true }
    );
    if (!updatedChef) {
      return res.status(404).json({ message: "Chef not found" });
    }
    res.status(200).json(updatedChef);
  } catch (err) {
    res.status(500).json({ message: "Error disapproving chef", error: err });
  }
};
