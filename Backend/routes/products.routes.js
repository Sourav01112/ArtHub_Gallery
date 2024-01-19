const express = require("express");
const { ProductsModel } = require("../models/products.model");
const { errorHandler } = require("../middlewares/errorHandle.middleware");
const { UserModel } = require("../models/user.model");
const { handleResponse } = require("../utils/helper");
const productRouter = express.Router();
require("dotenv").config();

productRouter.use(errorHandler);

// GET ALL PRODUCTS : Multiple
productRouter.post("/", async (req, res) => {



  console.log("insdie /")

  const options = {
    page: req.body.page,
    limit: req.body.limit,
    collation: {
      locale: 'en',
      strength: 2
    }
  }

  try {
    ProductsModel.paginate(req.body.search, options, (err, doc) => {
      if (doc?.docs !== null && doc?.docs?.length > 0 && doc != undefined) {
        handleResponse(res, 200, "Fetched Inventory", doc)
      } else {
        handleResponse(res, 201, "Inventory Empty")
      }
    })
  } catch (err) {
    handleResponse(res, 500, "Error retrieving products", err.message)
  }
});

// To GET only One Product : ID known
productRouter.post("/:id", async (req, res) => {

  console.log("---HITTING-----", req.query)
  // if (req.permissions.indexOf("view-product") === -1) {
  //   return res.send({ code: 401, message: "Unauthenticated" });
  // }
  // return
  let data = await ProductsModel.findById(req.query.id);

  console.log("data", data)
  if (data) {
    res.status(200).json({ msg: "Fetch by ID success", dataFetch: data });
  } else {
    res.status(500).json({ msg: err.message });
  }
});

// Add to Cart

productRouter.post("/add-to-cart", async (req, res) => {

  console.log("------>req.body", req.body);

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
  console.log("req.body")
  const userID = req.body.userID;
  const data = await UserModel.findOne({ _id: userID }).populate(
    "productInCart"
  );

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
