const express = require("express");
require("dotenv").config();
const orderRouter = express.Router();

orderRouter.post("/", (req, res) => {
  let instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  var options = {
    amount: req.body.amount * 100, 
    currency: "USD",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.send({ code: 500, message: "Server Err." });
    }
    return res.send({ code: 200, message: "order created", data: order });
  });
});
orderRouter.post("/verify", (req, res) => {});

module.exports = { orderRouter };
