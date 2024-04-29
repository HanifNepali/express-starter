const User = require("../models/User");

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users.length) {
            res.status(404).json({ msg: "No users found" });
            return;
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Unable to fetch all users" });
    }
};

// Get single user
const getUser = async (req, res) => {
    try {
        const id = req.params.userId;
        // Find existing user
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ msg: "User not found" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: "Unable to fetch the user" });
    }
};

// Update user
const updateUser = async (req, res) => {
    try {
        const id = req.params.userId;
        // Find existing user
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ msg: "User not found" });
            return;
        }

        // Update existing user
        await user.update(req.body);

        // Return updated user
        const updatedUser = await User.findByPk(id);
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json({ msg: "Unable to update the user" });
    }
};

// Delete a User
const deleteUser = async (req, res) => {
    try {
        const id = req.params.userId;
        // Find existing user
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ msg: "User not found" });
            return;
        }

        await user.destroy();
        res.status(201).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Unable to delete the user" });
    }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
