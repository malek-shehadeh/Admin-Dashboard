// // backend/controllers/dishController.js
// const Dish = require("../models/Dish");

// exports.getDishes = async (req, res) => {
//   try {
//     const dishes = await Dish.find();
//     res.json(dishes);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching dishes", error });
//   }
// };

// exports.updateDishApproval = async (req, res) => {
//   try {
//     const { dishId } = req.params;
//     const { isApproved } = req.body;
//     const dish = await Dish.findByIdAndUpdate(
//       dishId,
//       { isApproved },
//       { new: true }
//     );
//     if (!dish) {
//       return res.status(404).json({ message: "Dish not found" });
//     }
//     res.json(dish);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error updating dish approval status", error });
//   }
// };
// ////////////
// backend/controllers/dishController.js
// backend/controllers/dishController.js
const Dish = require("../models/Dish");

exports.getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    console.error("Error fetching dishes:", error);
    res.status(500).json({ message: "Error fetching dishes", error });
  }
};

exports.updateDishApproval = async (req, res) => {
  try {
    const { dishId } = req.params;
    const dish = await Dish.findById(dishId);

    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    // Toggle the approved status
    dish.approved = !dish.approved;
    await dish.save();

    res.json(dish);
  } catch (error) {
    console.error("Error updating dish approval status:", error);
    res
      .status(500)
      .json({ message: "Error updating dish approval status", error });
  }
};
