const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

// middleware
const routeNotFound = require("./middleware/routeNotFound");
const { logger, logRouteInfo } = require("./middleware/logger");
const {
    handleError,
    handleUncaughtException,
} = require("./middleware/exception");

// express app
const app = express();

// add cors options
// allow only the local client for now
var corsOptions = {
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
};

// express middlewares

// to parse incoming request bodies in JSON format.
app.use(express.json());
// to allow requests from selective origins
app.use(cors(corsOptions));
// to parse cookies in header
app.use(cookieParser());

// log Route info
app.use(logRouteInfo);

// ROUTES
app.use("/api/auth", require("./routes/api/authRoutes"));
app.use("/api/users", require("./routes/api/userRoutes"));
// include more routes here

// Middleware to handle undefined routes
app.use(routeNotFound);

// Middleware to handle errors
app.use(handleError);

// Middleware to handle uncaught exceptions
app.use(handleUncaughtException);

// Handle uncaught promise rejections
process.on("unhandledRejection", (err) => {
    logger.error("Unhandled promise rejection:", err);
});

// port setup
const port = process.env.PORT || 8000;

// start Server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () =>
            logger.info(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        logger.error("Server start up error:", error);
    }
};

startServer();

module.exports = app;
