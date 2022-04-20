const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    plains: [
      {
        plainId: {
          ref: "Plain",
          type: Schema.Types.ObjectId,
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
        date: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Cart", CartSchema);
