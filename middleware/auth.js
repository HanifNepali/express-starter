const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
    // Get cookie token from request
    const token = req.cookies?.token || "";

    // Check for token
    if (!token) {
        return res
            .status(401)
            .json({ msg: "No user logged in. Authorization denied" });
    }

    try {
        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                res.cookie("token", "", { httpOnly: true });

                return res
                    .status(401)
                    .cookie("token", "", { httpOnly: true })
                    .json({ msg: "Invalid token" });
            }
            req.userId = decoded.userId;
            next();
        });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { requireAuth };
