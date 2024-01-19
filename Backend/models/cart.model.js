const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "user", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "products", required: true },
    quantity: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
