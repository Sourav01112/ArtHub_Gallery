const express = require("express");
const { ProductsModel } = require("../models/products.model");
const { errorHandler } = require("../middlewares/errorHandle.middleware");
const { UserModel } = require("../models/user.model");
const { handleResponse } = require("../utils/helper");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { CartModel } = require("../models/cart.model");
const cartRouter = express.Router();
require("dotenv").config();

// productRouter.use(errorHandler);


// Adding to Cart 

cartRouter.post('/addCart', authMiddleware, async (req, res) => {

    const { userID, productId, quantity } = req.body;
    // console.log("req.body", req.body)

    // return
    try {
        const userExists = await UserModel.findById(userID);

        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        const productExists = await ProductsModel.findById(productId);
        console.log("rpdocyExi789-", productExists)
        if (!productExists) {
            return res.status(404).json({ message: "Product not found" });
        }
        let cartCheck = await CartModel.findOne({ userID, productId })
        if (cartCheck) {
            cartCheck.quantity += quantity;
        } else {
            // If the entry doesn't exist, create a new one
            cartCheck = new CartModel({
                userID,
                productId,
                quantity,
            });
        }
        const cartSave = await cartCheck.save()
        // console.log("doc", cartSave);
        res.status(200).json({ message: "Product added to cart successfully", data: cartSave });

    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})





// Get Cart Mongoose Paginate 

cartRouter.post('/getCart', authMiddleware, async (req, res) => {

    console.log("hitting getCart----", req.body)



    try {
        const userID = req.body.userID;
        const cart = await CartModel.find({ userID: userID }).populate('productId');

        // console.log("req.bod in GET----", cart)



        if (!cart) {
            return res.status(404).json({ message: 'cart is empty' });
        }

        res.status(200).json({ data: cart, mesage: "Cart Fetched" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }




})





module.exports = { cartRouter };

