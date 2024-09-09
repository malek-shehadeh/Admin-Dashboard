require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors());
app.use(express.json());
////
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
/////
// User routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
console.log("User routes registered");

// Other routes...
const contactRoutes = require("./routes/contactMessageRoutes");
app.use("/api/contacts", contactRoutes);
////////dish////
const dishRoutes = require("./routes/dishRoutes");
app.use("/api", dishRoutes);
//////recipe/////
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);
//////repors//////
const reportRoutes = require("./routes/reportRoutes");
app.use("/api/reports", reportRoutes);
//////chefs///////
const chefRoutes = require("./routes/chefRoutes");
app.use("/api", chefRoutes);
//////login//////
const { router: authRoutes } = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
//////
// New route for order information
const orderInfoRoutes = require("./routes/orderroutes");
app.use("/api/order-info", orderInfoRoutes);
console.log("Order info routes registered");
//////

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
