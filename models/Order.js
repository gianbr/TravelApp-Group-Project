const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
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
    //Amount es el precio total de todos los planes
    amount: { type: Number, required: true },
    //Nos va a servir para enviarle un email cuando pague
    email: { type: Object, required: true },
    status: { type: String, default: "reserved" },
  },
  { timestamps: true }
);

module.exports = model("Order", OrderSchema);
