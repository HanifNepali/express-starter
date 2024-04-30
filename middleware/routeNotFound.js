const { logger } = require("./logger");

const routeNotFound = (req, res) => {
    logger.warn("Requested page not found");
    res.status(404).json({
        error: {
            message: "Request page not found",
        },
    });
};

module.exports = routeNotFound;
