const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    permissions: { type: [String], required: true },
  },
  {
    versionKey: false,
  }
);

const RoleModel = mongoose.model("role", roleSchema);

module.exports = { RoleModel };
