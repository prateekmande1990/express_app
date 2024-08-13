const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;

const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../utility/response-handler");

const updateUser = async (req, res) => {};

module.exports = {
  updateUser,
};
