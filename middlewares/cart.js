require("../connections/mongo");
const Cart = require("../models/Cart");
const User = require("../models/User");

const createCart = async (req, res, next) => {
  try {
    const { userId, plains } = req.body;

    const newCart = new Cart({
      userId,
      plains,
    });

    const savedCart = await newCart.save();
    console.log(savedCart);
    // res.status(200).json({ message: "Cart created successfully" });
    next();
  } catch (error) {
    console.error(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const userCart = await Cart.findOne({ userId: userId });
    if (!userCart) {
      return res.json({ message: "Cart not found" });
    }
    await Cart.findByIdAndDelete(userCart._id);
    return res.json({ message: "Cart deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCart, deleteCart };
