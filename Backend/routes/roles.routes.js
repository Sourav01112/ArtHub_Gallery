const express = require("express");
const { RoleModel } = require("../models/roles.model");
const roleRouter = express.Router();

// Add- Role
roleRouter.post("/add-role", async (req, res) => {
  const role = req.body.role;
  const permissions = req.body.permissions;

  const newRole = await new RoleModel({ role, permissions });
  const isSaved = await newRole.save();

  if (isSaved) {
    return res.status(200).json({ msg: "Role added" });
  } else {
    return res.status(500).json({ msg: "Server Error" });
  }
});
// DELETE- Role
roleRouter.post("/delete -role", async (req, res) => {
  return res.status(200).json({ msg: "Role Deleted!" });
});

module.exports = { roleRouter };
