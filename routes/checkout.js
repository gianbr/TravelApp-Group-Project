const Router = require("express");
const checkout = Router();
const cart = require("../middlewares/cart");
const order = require("../middlewares/order");
const stripe = require("../middlewares/stripe");
const authJwt = require("../middlewares/authjwt");

checkout.post("/", [
  authJwt.verifyToken,
  cart.createCart,
  order.createOrder,
  stripe.payment,
  cart.deleteCart,
]);
module.exports = checkout;
