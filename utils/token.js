const jwt = require("jsonwebtoken");

const createToken = async (userId) => {
    const payload = {
        userId,
    };

    // In seconds
    const maxAge = 1 * 24 * 60 * 60;
    try {
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: maxAge,
        });
        return token;
    } catch (err) {
        throw err;
    }
};

module.exports = { createToken };
