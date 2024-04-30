const createError = require("http-errors");

const User = require("../models/User");
const { logger } = require("../middleware/logger");

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users.length) {
            logger.warn("User not found");
            throw createError(404, "Users not found");
        }
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Get single user
const getUser = async (req, res, next) => {
    try {
        const id = req.params.userId;
        // Find existing user
        const user = await User.findByPk(id);
        if (!user) {
            logger.warn("User not found");
            throw createError(404, "User not found");
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Update user
const updateUser = async (req, res) => {
    try {
        const id = req.params.userId;
        // Find existing user
        const user = await User.findByPk(id);
        if (!user) {
            logger.warn("User not found");
            throw createError(404, "User not found");
        }

        // Update existing user
        await user.update(req.body);

        // Return updated user
        const updatedUser = await User.findByPk(id);
        res.status(201).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// Delete a User
const deleteUser = async (req, res) => {
    try {
        const id = req.params.userId;
        // Find existing user
        const user = await User.findByPk(id);
        if (!user) {
            logger.warn("User not found");
            throw createError(404, "User not found");
        }

        // Delete user
        await user.destroy();
        res.status(201).json({ msg: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
