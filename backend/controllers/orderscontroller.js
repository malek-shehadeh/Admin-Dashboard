const Order = require("../models/orders");
const User = require("../models/User");
const Chef = require("../models/Chefs");

exports.getOrderInfo = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "username")
      .populate("chefId", "username")
      .select("userId chefId totalAmount status orderDate");

    console.log("Orders fetched:", orders); // For debugging

    const formattedOrders = orders.map((order) => ({
      orderId: order._id,
      userName: order.userId?.username || "Unknown User",
      chefName: order.chefId?.username || "Unknown Chef",
      totalAmount: order.totalAmount,
      status: order.status,
      orderDate: order.orderDate,
    }));

    res.json(formattedOrders);
  } catch (error) {
    console.error("Error in getOrderInfo:", error);
    res.status(500).json({
      message: "Error retrieving order information",
      error: error.message,
    });
  }
};
