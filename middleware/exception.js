const { logger } = require("./logger");

// Middleware to catch errors
const handleError = (err, req, res, next) => {
    logger.error(err.stack);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message || "Internal Server Error",
        },
    });
};

// Middleware to catch uncaught exceptions
const handleUncaughtException = (err, req, res, next) => {
    logger.error("Uncaught exception", err);
    res.status(500).json({ error: "Internal Server Error!" });
};

module.exports = { handleError, handleUncaughtException };
