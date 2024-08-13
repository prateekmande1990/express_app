const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const compression = require("compression");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.options("*", cors());
app.use(compression());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "DELETE, PUT, POST, GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "express_app_session",
    secret: process.env.SECRET_KEY,
    httpOnly: true,
    sameSite: "strict",
  })
);

const db = require("./app/models");
db.sequelize.sync();
app.get("/", (req, res) => {
  res.send("ENTER DESIRED MESSAGE HERE");
});

<<<<<<< HEAD
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
=======
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
>>>>>>> 6f3067070b1cecf506d44451b8fa9b3a3b5b2292
