// controllers/orderInfoController.js
const Order = require("../models/orders");
const User = require("../models/User");
const Chef = require("../models/Chefs");

exports.getOrderInfo = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "username")
      .populate("chefId", "username")
      .select("userId chefId totalAmount status orderDate");

    const formattedOrders = orders.map((order) => ({
      orderId: order._id,
      userName: order.userId.username,
      chefName: order.chefId.username,
      totalAmount: order.totalAmount,
      status: order.status,
      orderDate: order.orderDate,
    }));

    res.json(formattedOrders);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving order information",
      error: error.message,
    });
  }
};
