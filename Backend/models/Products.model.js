const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: Array, required: true },
    price: { type: Number, required: true },
    subtitle: { type: String, required: true },
    year: { type: Number, required: true },
    artist: { type: String, required: true },
    inStock: { type: Number, required: true }
  },
  {
    versionKey: false,
  }
);

const ProductsModel = mongoose.model("products", productsSchema);

module.exports = { ProductsModel };
