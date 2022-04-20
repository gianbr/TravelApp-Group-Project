require("../connections/mongo");
const Order = require("../models/Order");

const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);
  console.log(req.body);
  try {
    const savedOrder = await newOrder.save();
    // res.status(200).json(savedOrder);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { createOrder };
