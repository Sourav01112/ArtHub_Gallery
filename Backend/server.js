const express = require("express");
const app = express();
const ip = require('ip')

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { productRouter } = require("./routes/products.routes");
const { errorHandler } = require("./middlewares/errorHandle.middleware");
const { adminRouter } = require("./routes/admin.routes");
const { orderRouter } = require("./routes/payment.routes");
const { roleRouter } = require("./routes/roles.routes");
const { cartRouter } = require("./routes/cart.model");

require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// No auth Middleware should be passed
app.use("/api/users", userRouter);
app.use("/api/shop", productRouter);
app.use("/api/cart", cartRouter);

app.use("/api/admin", adminRouter);
app.use("/api/order", orderRouter);
app.use("/api/role", roleRouter);

// Server
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Mogno Atlas Connected");
    console.log("Server is running at port number", PORT);
  } catch (error) {
    console.log("Mongo connection error");
    console.log(error);
  }
});


console.log("app is running on ip " + ip.address())
