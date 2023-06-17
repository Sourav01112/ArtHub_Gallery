const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AdminModel } = require("../models/Admin.model");
const adminRouter = express.Router();
require("dotenv").config();

// / Admin Route

adminRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (
      email == process.env.adminEmail &&
      password == process.env.adminPassword
    ) {
      const token = jwt.sign(
        { adminEmail: email, role: "admin" },
        process.env.JWT_SECRET_KEY
      );

      if (token) {
        res.cookie("jwt", token);
        res.cookie("role", "Admin"); // did not work with cookies, instead using localStorage
        res.statusMessage = "Success";
        res.json({
          msg: "Login Successful.",
          status: "success",
          token,
          cookie: req.cookies,
        });
      }
    } else {
      res.statusMessage = "Invalid Credentials!";
      res.json({ msg: "Check you email and password.", status: "error" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

adminRouter.post("/verify", (req, res) => {
  const { token } = req.body;
  try {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (decoded) {
          res.json({ decoded, cookie: req.cookies });
        }
      });
    } else {
      res.json({ msg: "Please login again!!" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { adminRouter };
