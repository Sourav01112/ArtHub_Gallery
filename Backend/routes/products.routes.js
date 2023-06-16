const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ProductsModel } = require("../models/Products.model");
const { errorHandler } = require("../middlewares/errorHandle.middleware");
const productRouter = express.Router();
require("dotenv").config();

productRouter.use(errorHandler);

// GET ALL PRODUCTS
productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (err) {
    console.log("Error retrieving products:", err);
    res.status(500).json({ msg: err.message });
  }
});

module.exports = { productRouter };
