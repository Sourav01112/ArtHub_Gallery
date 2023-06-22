const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { productRouter } = require("./routes/products.routes");
const { errorHandler } = require("./middlewares/errorHandle.middleware");
const { adminRouter } = require("./routes/admin.routes");
const { orderRouter } = require("./routes/payment.routes");
const { roleRouter } = require("./routes/roles.routes");

require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// No auth Middleware should be passed
app.use("/user", userRouter);
app.use("/shop", productRouter);
app.use("/admin", adminRouter);
app.use("/order", orderRouter);
app.use("/role", roleRouter);

// Server
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is running at port number", PORT);
  } catch (error) {
    console.log(error);
  }
});
