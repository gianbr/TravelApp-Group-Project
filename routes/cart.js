require("../connections/mongo");
const express = require("express");
const Cart = require("../models/Cart");
const User = require("../models/User");
const authJwt = require("../middlewares/authjwt");

const cart = express.Router();

cart.post("/createcart", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId, plains } = req.body;

    const newCart = new Cart({
      userId,
      plains,
    });

    const savedCart = await newCart.save();
    console.log(savedCart);
    res.status(200).json({ message: "Cart created successfully" });
  } catch (error) {
    console.error(error);
  }
});

cart.put("/additem", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId, plain } = req.body;
    const userCart = await Cart.updateOne(
      {
        userId: userId,
      },
      {
        $push: {
          plains: plain,
        },
      }
    );

    if (userCart) {
      return res.status(200).json(userCart);
    } else {
      return res.status(400).json({ message: "Error" });
    }
  } catch (error) {
    console.error(error);
  }
});

cart.get("/usercart", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId } = req.body;
    const userCart = await Cart.findOne({ userId: userId });
    if (userCart) {
      return res.status(200).json(userCart);
    } else {
      return res.status(400).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
  }
});

//Rutas para agregar
//Quitar item del carrito
//Vaciar carrito (cuando realizo la compra o cuando le de a vaciar carrito)

module.exports = cart;
