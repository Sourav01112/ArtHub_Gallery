const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    role: String ,
    permissions: { type: [String]},
  },
  {
    versionKey: false,
  }
);

const RoleModel = mongoose.model("roles", roleSchema);

module.exports = { RoleModel };
