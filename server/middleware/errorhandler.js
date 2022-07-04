const handlingError = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal Server Error";

  if (err.name === "SequelizeUniqueConstraintError") {
    code = 400;
    msg = "email already in use";
  } else if (err.name === "userNotFound") {
    code = 404;
    msg = "User not Found";
  } else if (err.name === "passIncorrect") {
    code = 400;
    msg = "Password Incorect";
  } else if (err.name === "notToken") {
    code = 403;
    msg = "access forbidden / must login";
  } else if (err.name === "require") {
    (code = 404), (msg = "email & password required");
  } else if (err.name === "SequelizeValidationError") {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "notFound") {
    code = 404;
    msg = "item not found";
  }

  res.status(code).json({
    statusCode: code,
    message: msg,
  });
};

module.exports = handlingError;
