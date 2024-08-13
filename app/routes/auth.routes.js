const usersController = require("../controllers/users.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/search/:id", usersController.updateUser); // Sample route provide you can provide as many as you want.
};
