// backend/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
//////contact/////
const contactRoutes = require("./routes/contactMessageRoutes");
app.use("/api/contacts", contactRoutes);
//////////dish///
const dishRoutes = require("./routes/dishRoutes");
app.use("/api", dishRoutes);
//////
// User routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes); // Added user routes
////////
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
