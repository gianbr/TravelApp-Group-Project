const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const payment = async (req, res, next) => {
  const { amount, token } = req.body;
  //El token viene desde el front por medio del body
  // const token = "tok_1Kq58PFQmrEzYCzRJOJuAKEX";
  stripe.charges.create(
    {
      source: token,
      amount: amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        // res.status(200).json(stripeRes);
        next();
      }
    }
  );
};

module.exports = { payment };
