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
    // productInCart: [
    //   { type: Schema.Types.ObjectId, ref: "products" }
    // ],

    roles: { type: [String], ref: "roles" },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
