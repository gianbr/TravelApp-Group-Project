const Router = require("express");
const checkout = Router();
const cart = require("../middlewares/cart");
const order = require("../middlewares/order");
const stripe = require("../middlewares/stripe");
const authJwt = require("../middlewares/authjwt");
const mail = require("../middlewares/mail");

checkout.post("/", [
  authJwt.verifyToken,
  cart.createCart,
  order.createOrder,
  stripe.payment,
  cart.deleteCart,
  mail.sendMailBuy,
]);
module.exports = checkout;
