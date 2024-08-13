const sendSuccessResponse = (res, message, data = null, statusCode = 200) => {
  if (data === null) {
    res.status(statusCode).json({
      msg: 1,
      result: message,
    });
  } else {
    res.status(statusCode).json({
      msg: 1,
      result: message,
      data,
    });
  }
};

const sendErrorResponse = (res, error, message = "", statusCode = 500) => {
  res.status(statusCode).json({
    msg: 0,
    result: message,
    error: error.message || "Internal Server Error",
  });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
};
