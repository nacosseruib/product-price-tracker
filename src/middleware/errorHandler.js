// src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    const response = {
        status: "error",
        message: err.message || "Internal Server Error"
    };

    // Log error (better to use Winston or Pino in production)
    console.error(`[${new Date().toISOString()}] ${err.name}: ${err.message}`);
    if (process.env.NODE_ENV !== "production") {
        response.stack = err.stack;
    }

    res.status(statusCode).json(response);
};

module.exports = errorHandler;
