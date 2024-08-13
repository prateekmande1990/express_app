const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/index.js");
const User = db.user;

verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      console.log("Error", err);
      return res.status(403).json({ message: "Invalid token" });
    }
    const userId = decoded.id;
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  });
};

const authJwt = {
  // verifyToken, Add as required
};
module.exports = authJwt;
