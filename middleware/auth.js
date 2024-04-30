const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const { logger } = require("./logger");

const requireAuth = async (req, res, next) => {
    // Get cookie token from request
    const token = req.cookies?.token || "";

    // Check for token
    if (!token) {
        logger.warn("Authorization - No user logged in");
        throw createError(401, "No user logged in. Authorization denied");
    }

    try {
        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                logger.warn("Authorization - Invalid token");
                throw createError(401, "Authorization - Invalid token");
            }
            req.userId = decoded.userId;
            next();
        });
    } catch (error) {
        logger.error("Authorization Error", error);
        next(error);
    }
};

module.exports = { requireAuth };
