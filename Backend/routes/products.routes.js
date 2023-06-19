const express = require("express");
const { ProductsModel } = require("../models/Products.model");
const { errorHandler } = require("../middlewares/errorHandle.middleware");
const { UserModel } = require("../models/User.model");
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

// Add to Cart

productRouter.post("/add-to-cart", async (req, res) => {
  // console.log(req.body, "62");

  const isUpdate = await UserModel.updateOne(
    { _id: req.body.userID },
    {
      $addToSet: { productInCart: req.body.productID },
    }
    /*   // $addToSet will help in pushing some data inside Array becuase productInCart is  Array, so this method is the only way */
  );
  if (isUpdate) {
    return res.status(200).json({ msg: "Add to cart success." });
  } else {
    return res.status(500).json({ msg: "Server Error" });
  }
});

// GET productInCart products

productRouter.post("/get-cart", async (req, res) => {
  const userID = req.body.userID;

  const data = await UserModel.findOne({ _id: userID }).populate(
    "productInCart"
  );
  /* This code is finding a user in the UserModel collection by their ID and populating the
    "productInCart" field with the actual product documents from the ProductsModel collection. This means that when the user's cart is retrieved, it will contain the full details of each product in their cart, rather than just the product IDs. */

  if (data) {
    return res.status(200).json({ msg: "Get cart success.", data: data });
  } else {
    return res.status(500).json({ msg: "Server Error" });
  }
});

//****  ADD here the filter, sorting, pagination for useSearchParams in the FrontEnd ******

// // POST

// productRouter.post("/add-product", async (req, res) => {

//   let data = new ProductsModel(req.body);
//   await data.save();
//   if (data) {
//     res.status(200).json({ msg: "New Product added", newData: data });
//   } else {
//     res.status(500).json({ msg: err.message });
//   }
// });

// // EDIT
// productRouter.post("/edit-Product", async (req, res) => {
//   // console.log(req.body, 31);

//   let newData = {};

//   if (req.body.title) {
//     newData["title"] = req.body.title;
//   }
//   if (req.body.desc) {
//     newData["desc"] = req.body.desc;
//   }
//   if (req.body.image) {
//     newData["image"] = req.body.image;
//   }
//   if (req.body.price) {
//     newData["price"] = req.body.price;
//   }
//   if (req.body.subtitle) {
//     newData["subtitle"] = req.body.subtitle;
//   }
//   if (req.body.year) {
//     newData["year"] = req.body.year;
//   }
//   if (req.body.artist) {
//     newData["artist"] = req.body.artist;
//   }
//   if (req.body.inStock) {
//     newData["inStock"] = req.body.inStock;
//   }

//   const id = req.body.id;
//   let filter = { _id: id };

//   let updateData = await ProductsModel.findOneAndUpdate(filter, newData, {
//     new: true,
//   });
//   if (updateData) {
//     res.status(200).json({ msg: "edit success", updated: updateData });
//   } else {
//     res.status(500).json({ msg: err.message });
//   }
// });

// // DELETE

// productRouter.delete("/delete-product", async (req, res) => {

//   const { id } = req.body;
//   const deleted = await ProductsModel.findByIdAndDelete({ _id: id });
//   if (deleted) {
//     res.status(200).json({ msg: "Deleted successfully", deletedData: deleted });
//   } else {
//     res.status(500).json({ msg: err.message });
//   }
// });

module.exports = { productRouter };
