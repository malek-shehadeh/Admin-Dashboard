// // backend/routes/dishRoutes.js
// const express = require("express");
// const router = express.Router();
// const dishController = require("../controllers/dishController");

// // Route to get all dishes
// router.get("/dishes", dishController.getDishes);

// // Route to update dish approval status
// router.put("/dishes/:dishId", dishController.updateDishApproval);

// module.exports = router;
///////
// backend/routes/dishRoutes.js
const express = require("express");
const router = express.Router();
const dishController = require("../controllers/dishController");

// Route to get all dishes
router.get("/dishes", dishController.getDishes);

// Route to update dish approval status
router.put("/dishes/:dishId", dishController.updateDishApproval);

module.exports = router;
