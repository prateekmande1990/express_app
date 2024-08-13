const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const compression = require("compression");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const setupMiddleware = (app) => {
  app.use(cors());
  app.options("*", cors());
  app.use(compression());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, GET");
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
};
setupMiddleware(app);
const db = require("./app/models");
db.sequelize.sync();
app.get("/", (req, res) => {
  res.send("ENTER DESIRED MESSAGE HERE");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
