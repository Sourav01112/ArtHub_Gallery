const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: String,
    password: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    productInCart: [{ type: Schema.Types.ObjectId, ref: "products" }],
    //  why ref : ? inside Schema.Types.ObjectId we have products's (ProductModel) collection ID, so ref will make sure. We will put user's ID in productsInCart after ADD to Cart is clicked. Initially productInCart will be empty
    roles: { type: [String], ref: "roles" },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
