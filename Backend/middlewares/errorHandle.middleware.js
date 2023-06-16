const errorHandler = (err, req, res, next) => {
  let errStatus = err.statusCode || 500;
  let errMessage = err.message || "Internal Server Error";

  console.log("error");
  res.status(errStatus).send(errMessage);
};

module.exports = { errorHandler };
