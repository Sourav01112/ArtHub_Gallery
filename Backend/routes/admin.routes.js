const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AdminModel } = require("../models/Admin.model");
const { ProductsModel } = require("../models/Products.model");
const { errorHandler } = require("../middlewares/errorHandle.middleware");
const { RoleModel } = require("../models/roles.model");
const adminRouter = express.Router();
require("dotenv").config();

// to handle Error
adminRouter.use(errorHandler);

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
        res.statusMessage = "Success";
        res.json({
          msg: "Login Successful.",
          status: "success",
          token,
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

// CRUD Operation only by ADMIN

// GET ALL PRODUCTS : Multiple
adminRouter.get("/getProducts", async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.log("Error retrieving products:", err);
    res.status(500).json({ msg: err.message });
  }
});

// To GET only One Product : ID known
adminRouter.get("/:id", async (req, res) => {
  // if (req.permissions.indexOf("view-product") === -1) {
  //   return res.send({ code: 401, message: "Unauthenticated" });
  // }
  let data = await ProductsModel.findById(req.params.id);
  if (data) {
    res.status(200).json({ msg: "Fetch by ID success", dataFetch: data });
  } else {
    res.status(500).json({ msg: err.message });
  }
});

// POST

adminRouter.post("/add-product", async (req, res) => {
  //   if (req.permissions.indexOf('add-product') === -1) {
  //     return res.send({ code: 401, message: 'Unauthenticated' })
  // }
  let data = new ProductsModel(req.body);
  await data.save();
  if (data) {
    res.status(200).json({ msg: "New Product added", newData: data });
  } else {
    res.status(500).json({ msg: err.message });
  }
});

// EDIT
adminRouter.post("/edit-products", async (req, res) => {
  // console.log(req.body, 31);

  let newData = {};

  if (req.body.title) {
    newData["title"] = req.body.title;
  }
  if (req.body.desc) {
    newData["desc"] = req.body.desc;
  }
  if (req.body.image) {
    newData["image"] = req.body.image;
  }
  if (req.body.price) {
    newData["price"] = req.body.price;
  }
  if (req.body.subtitle) {
    newData["subtitle"] = req.body.subtitle;
  }
  if (req.body.year) {
    newData["year"] = req.body.year;
  }
  if (req.body.artist) {
    newData["artist"] = req.body.artist;
  }
  if (req.body.inStock) {
    newData["inStock"] = req.body.inStock;
  }

  const id = req.body.id;
  let filter = { _id: id };

  let updateData = await ProductsModel.findOneAndUpdate(filter, newData, {
    new: true,
  });
  if (updateData) {
    res.status(200).json({ msg: "edit success", updated: updateData });
  } else {
    res.status(500).json({ msg: err.message });
  }
});

// DELETE

adminRouter.delete("/delete-products", async (req, res) => {
  const { ids } = req.body;
  const deleted = await ProductsModel.deleteMany({ _id: { $in: ids } });
  // $in because those are Array
  if (deleted) {
    res.status(200).json({
      msg: "Selected Item Deleted successfully",
      deletedData: deleted,
    });
  } else {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = { adminRouter };
