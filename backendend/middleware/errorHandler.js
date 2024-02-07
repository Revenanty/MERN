export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export const invalidRouteHandler = (req, res, next) => {
  const error = new Error("Invalid Route");
  error.statusCode = 404;
  next(error);
};
