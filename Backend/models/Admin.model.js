const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
