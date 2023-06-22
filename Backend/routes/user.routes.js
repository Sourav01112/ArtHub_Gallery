const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
require("dotenv").config();
const { UserModel } = require("../models/User.model");
const { AdminModel } = require("../models/Admin.model");
const { BlacklistModel } = require("../models/blacklist.model");
const { passwordValidater } = require("../middlewares/validator.middleware");
const { RoleModel } = require("../models/roles.model");

// Register
userRouter.post("/register", passwordValidater, async (req, res) => {
  const { name, email, password, age, city } = req.body;

  // Saving type of role while Signup
  const type = req.body.type || "USER";
  const roleData = await RoleModel.findOne({ role: type });
  // console.log("@roleDFata", roleData);
  const roles = [roleData._id];
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
        const user = UserModel({ ...req.body, password: hash, roles });
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
  try {
    const { email, password } = req.body;
    const userExists = await UserModel.findOne({ email }).populate("roles");

    if (userExists) {
      bcrypt.compare(password, userExists.password, (err, result) => {
        if (result) {
          var token = jwt.sign(
            {
              userID: userExists._id,
              userName: userExists.name,
              type: userExists.type,
              roles: userExists.roles,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
          );

          if (token) {
            res.status(200).json({
              msg: "Login Successful",
              token: token,
              user: userExists,
            });
            /* Above userID will help in making sure which product is being added in the CART PAGE on the Client Side, retrieve in FE */
          } else {
            res
              .status(200)
              .json({ msg: "Something went wrong. Please try again." });
          }
        } else {
          res.status(400).json({ msg: "Invalid Credentials." });
        }
      });
    } else {
      res.status(400).json({ msg: "User does not exist" });
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
