const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { productRouter } = require("./routes/products.routes");
const { errorHandler } = require("./middlewares/errorHandle.middleware");
require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
// user middleware for user Route
app.use("/user", authMiddleware);
app.use("/shop", productRouter);

// Server
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is running at port number", PORT);
  } catch (error) {
    console.log(error);
  }
});
