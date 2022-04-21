require("../connections/mongo");
const express = require("express");
const mongoose = require("mongoose");
const Order = require("../models/Order");
const User = require("../models/User");
const Plain = require("../models/Planes");
const order = express.Router();

order.get("/allorders", async (req, res) => {
  let allOrders = await Order.find();
  // console.log(allOrders);
  if (allOrders.length < 0) {
    return res.json([]);
  }
  const orders = await Promise.all(
    allOrders.map(async (order) => {
      let user = await User.findById(order.userId);
      console.log(user);
      let plains = await Promise.all(
        order.plains.map(async (p) => {
          if (mongoose.isValidObjectId(p.plainId)) {
            let plain = await Plain.findById(p.plainId);
            if (plain == null) {
              return [];
            }
            // console.log(plain);
            return { title: plain.title, price: plain.price };
          } else {
            return;
          }
        })
      );
      // console.log(plains);
      return {
        user: user?.username,
        plains,
        amount: order.amount,
        status: order.status,
      };
    })
  );
  // console.log(orders);
  return res.json(orders);
});

module.exports = order;
