const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    subtitle: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ProductsModel = mongoose.model("products", productsSchema);

module.exports = { ProductsModel };
