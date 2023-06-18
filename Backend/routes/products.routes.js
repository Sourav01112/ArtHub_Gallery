const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ProductsModel } = require("../models/Products.model");
const { errorHandler } = require("../middlewares/errorHandle.middleware");
const productRouter = express.Router();
require("dotenv").config();

productRouter.use(errorHandler);

// GET ALL PRODUCTS : Multiple
productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.log("Error retrieving products:", err);
    res.status(500).json({ msg: err.message });
  }
});

// To GET only One Product : ID known
productRouter.get("/:id", async (req, res) => {
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

productRouter.post("/add-product", async (req, res) => {
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
productRouter.post("/edit-Product", async (req, res) => {
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

productRouter.delete("/delete-product", async (req, res) => {
  // console.log(req.body, "73")
  //   if (req.permissions.indexOf('delete-products') === -1) {
  //       return res.send({ code: 401, message: 'Unauthenticated' })
  //   }
  const { id } = req.body;
  const deleted = await ProductsModel.findByIdAndDelete({ _id: id });
  if (deleted) {
    res.status(200).json({ msg: "Deleted successfully", deletedData: deleted });
  } else {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = { productRouter };
