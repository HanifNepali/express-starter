const User = require("../models/User");

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Unable to fetch all users" });
    }
};

// Get single user
const getUser = async (req, res) => {
    try {
        const id = req.params.userId;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Unable to fetch the user" });
    }
};

// Create single user
// TODO - Remove this route and replace with "/register" endpoint logic
const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ msg: "Unable to create the user" });
    }
};

// Update user
const updateUser = async (req, res) => {
    const id = req.params.userId;

    try {
        // Find existing user
        const user = await User.findByPk(id);

        // Update existing user
        await user.update(req.body);

        // Return updated user
        const updateUser = await User.findByPk(id);

        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({ msg: "Unable to update the user" });
    }
};

// Delete a User
const deleteUser = async (req, res) => {
    try {
        const id = req.params.userId;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.status(201).json({ msg: "User deleted successfully" });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {}
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
