// // // backend/controllers/userController.js
// // const User = require("../models/User");

// // exports.getUsers = async (req, res) => {
// //   try {
// //     const users = await User.find();
// //     res.json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching users", error });
// //   }
// // };

// // exports.updateUserStatus = async (req, res) => {
// //   try {
// //     const { userId } = req.params;
// //     const { isActive } = req.body;
// //     const user = await User.findByIdAndUpdate(
// //       userId,
// //       { isActive },
// //       { new: true }
// //     );
// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }
// //     res.json(user);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error updating user status", error });
// //   }
// // };
// //////////
// // backend/controllers/userController.js
// const User = require("../models/User");

// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ message: "Error fetching users", error });
//   }
// };

// exports.updateUserStatus = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Toggle the isActive status
//     user.isActive = !user.isActive;
//     await user.save();

//     res.json(user);
//   } catch (error) {
//     console.error("Error updating user status:", error);
//     res.status(500).json({ message: "Error updating user status", error });
//   }
// };
////////////
// backend/controllers/userController.js
const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    console.log("Fetching users...");
    const users = await User.find().select("-password");
    console.log("Users fetched:", users);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.toString() });
  }
};

exports.updateUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("Updating user status for userId:", userId);
    const user = await User.findById(userId);

    if (!user) {
      console.log("User not found:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    user.isActive = !user.isActive;
    await user.save();
    console.log("User status updated:", user);
    res.json(user);
  } catch (error) {
    console.error("Error updating user status:", error);
    res
      .status(500)
      .json({ message: "Error updating user status", error: error.toString() });
  }
};
