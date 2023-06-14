const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
// user middleware for user Route

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is started on port number", PORT);
  } catch (error) {
    console.log(error);
  }
});
