const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

// middleware
const routeNotFound = require("./middleware/routeNotFound");

// express app
const app = express();

// execute dotenv's config
// dotenv.config();

// add cors options
// allow only the local client for now
var corsOptions = {
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
};

// express middleware
// to parse incoming request bodies in JSON format.
app.use(express.json());
// to allow requests from selective origins
app.use(cors(corsOptions));

// ROUTES
app.use("/api/auth", require("./routes/api/authRoutes"));
app.use("/api/users", require("./routes/api/userRoutes"));
// include more routes here

// 404 Page for all other requests
app.use(routeNotFound);

// port setup
const port = process.env.PORT || 8000;

// start Server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
