const bcrypt = require("bcrypt");
const createError = require("http-errors");

const User = require("../models/User");
const { createToken } = require("../utils/token");
const { logger } = require("../middleware/logger");

// handler function for user registration
const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({
            where: { email: email.toLowerCase() },
        });
        if (user) {
            logger.warn("User already exists");
            throw createError(400, "User already exists");
        }

        // Build a new user
        const newUser = User.build({
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
            email: email.toLowerCase(),
            password,
        });

        // Hash password
        const salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(password, salt);

        // Save user in db
        const savedUser = await newUser.save();

        // Generate a token
        const token = await createToken(savedUser.id);

        // Send generated token as cookie and success message
        res.status(200)
            .cookie("token", token, { httpOnly: true })
            .json({ msg: "Registration successful" });
    } catch (error) {
        logger.error("Unable to register user");
        next(error);
    }
};

// handler function for user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user in db
        const user = await User.findOne({
            where: { email: email.toLowerCase() },
        });
        if (!user) {
            logger.warn("Invalid email during user registration");
            throw createError(400, "Invalid email");
        }
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            logger.warn("Invalid password during user registration");
            throw createError(400, "Invalid password");
        }

        // Generate a token
        const token = await createToken(user.id);

        // Send generated token as cookie and success message
        res.status(200)
            .cookie("token", token, { httpOnly: true })
            .json({ msg: "Login successful" });
    } catch (error) {
        logger.error("Unable to login");
        next(error);
    }
};

// handler function for logout
const logout = async (req, res) => {
    res.cookie("token", "", { httpOnly: true });
    res.json({ msg: "Logged Out" });
};

module.exports = { login, logout, register };
