const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
require("dotenv").config();
const { UserModel } = require("../models/user.model");
const { BlacklistModel } = require("../models/blacklist.model");
const { RoleModel } = require("../models/roles.model");
const jwt = require("jsonwebtoken");

const { handleResponse } = require('../utils/helper')

// Register
userRouter.post("/register", async (req, res) => {

  console.log("hello", req.body)

  const { name, email, password, age, city } = req.body;

  // Saving type of role while Signup
  const type = req.body.type || "USER";
  const roleData = await RoleModel.findOne({ role: type });
  /* `console.log("@roleDFata", roleData);` is logging the value of `roleData` to the console with a
  label of `@roleDFata`. This is likely being used for debugging purposes to check the value of
  `roleData` and ensure that it is being retrieved correctly from the database. */
  // console.log("@roleDFata", roleData);
  // const roles = [roleData._id];
  // saving Role collection _id to that signed up user(A simple USER or ADMIN)

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.json({ msg: "user already exists" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.json({ err: err.message });
      } else {
        const user = UserModel({ ...req.body, password: hash });
        // const user = UserModel({ ...req.body, password: hash, roles });
        await user.save();
      }
    });
    res.status(200).json({
      msg: "The new user has been registered",
      registeredUser: req.body,
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});

// Login
userRouter.post("/login", async (req, res) => {
  console.log("BODY--->", req.body)
  try {
    const { email, password } = req.body;
    const userExists = await UserModel.findOne({ email }).populate("roles");


console.log("userExists", userExists)

    if (userExists) {
      const accessToken = jwt.sign({
        userID: userExists._id
      },
        process.env.JWT_SECRET_KEY, { expiresIn: '1d' }
      )
      if (accessToken) {
        const userWithoutPass = { ...userExists.toObject() }
        delete userWithoutPass.password
        handleResponse(res, 200, "Login Successful", userWithoutPass, accessToken)
      } else {
        handleResponse(res, 200, "Something went wrong. Please try again.")
      }
    } else {
      handleResponse(res, 400, "User does not exist")

    }

  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});












// Logout : couldn't implement

userRouter.post("/logout", async () => {
  try {
    const tokenExists = req.headers.authorization?.split(" ")[1];

    if (tokenExists) {
      await BlacklistModel.updateMany({}, { $push: { blacklist: [token] } });
      res.status(200).send("Logout successful !");
    }
  } catch (error) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = { userRouter };
