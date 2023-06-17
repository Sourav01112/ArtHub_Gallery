const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema(
  {
    blacklist: { type: [String] },
  },
  {
    versionKey: false,
  }
);

const BlacklistModel = mongoose.model("blacklist", blackListSchema);

module.exports = { BlacklistModel };
