const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: Array, required: true },
    price: { type: Number, required: true },
    subtitle: { type: String, required: true },
    year: { type: Number, required: true },
    artist: { type: String, required: true },
    inStock: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

productsSchema.plugin(mongoosePaginate);

productsSchema.index({
  title: "text",
  desc: 'text',
  subtitle: "text",
  artist: "text"
})


const ProductsModel = mongoose.model("products", productsSchema);

module.exports = { ProductsModel };
