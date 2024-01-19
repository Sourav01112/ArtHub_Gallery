const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../models/blacklist.model");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {

  // console.log("req.headers in authMiddleware ", req.headers)

  const tokenExists = req.headers.authorization?.split(" ")[1] || null;

  console.log("@tokenExists0000", tokenExists);


  if (tokenExists !== undefined) {
    try {
      const decoded = jwt.verify(tokenExists, process.env.JWT_SECRET_KEY);
      console.log("@@decoded", decoded);
      if (decoded) {
        req.body.userID = decoded.userID;
        // req.body.userName = decoded.userName;

        console.log("@userID", decoded.userID);
        // console.log("@userName", decoded.userName);
        next();
      } else {
        res.status(401).json({ msg: "Not Authorized" });
      }
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  } else {
    res.status(401).json({ msg: "Please Login!" });
  }
};

module.exports = { authMiddleware };
