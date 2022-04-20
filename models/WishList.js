const { Schema, model } = require("mongoose");

const WishSchema = new Schema(
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
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("WishList", WishSchema);
