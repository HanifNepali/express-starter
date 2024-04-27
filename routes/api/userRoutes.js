const express = require("express");
const router = express.Router();

const { requireAuth } = require("../../middleware/auth");

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../../controllers/userController");

// @route   GET api/users/
// @desc    Returns all users
// @access  Private
router.get("/", getAllUsers);

// @route   GET api/users/:userId
// @desc    Returns a specific user
// @access  Private
router.get("/:userId", getUser);

// @route   GET api/users/create
// @desc    Returns a specific user
// @access  Private

// TODO - Remove this route and replace with "/register" endpoint logic
router.post("/create", createUser);

// @route   PATCH api/users/:userId
// @desc    Update specific field(s) in user
// @access  Private
router.patch("/:userId", updateUser);

// @route   DELETE api/users/:userId
// @desc    Deletes a specific user
// @access  Private
router.delete("/:userId", deleteUser);

module.exports = router;
