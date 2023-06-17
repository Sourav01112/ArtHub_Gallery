const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../models/blacklist.model");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const tokenExists = req.headers.authorization?.split(" ")[1];

  try {
    let existingToken = await BlacklistModel.find({
      blacklist: { $in: tokenExists },
      // if the token is present in Blacklist arr., it means the user is already logged out so, we will ask to login again
    });

    if (existingToken) {
      res.status(200).json("please Login!!");
    } else {
      const decoded = jwt.verify(tokenExists, process.env.SECRET_KEY);
      req.body.userID = decoded.userID;
      // req.body.name = decoded.name;
      next();
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }

  // if (tokenExists) {
  //   try {
  //     const decoded = jwt.verify(tokenExists, process.env.SECRET_KEY);
  //     if (decoded) {
  //       req.body.userID = decoded.userID;
  //       req.body.name = decoded.name;
  //       // console.log("@userID", decoded.userID);
  //       // console.log("@userName", decoded.userName);
  //       next();
  //     } else {
  //       res.status(200).json({ msg: "Not Authorized" });
  //     }
  //   } catch (err) {
  //     res.status(400).json({ err: err.message });
  //   }
  // } else {
  //   res.status(400).json({ msg: "Please Login!" });
  // }
};

module.exports = { authMiddleware };
