const express = require("express");
const router = express.Router();

const { requireAuth } = require("../../middleware/auth");
const {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
} = require("../../controllers/userController");

// @route   GET api/users/
// @desc    Returns all users
// @access  Private
router.get("/", requireAuth, getAllUsers);

// @route   GET api/users/:userId
// @desc    Returns a specific user
// @access  Private
router.get("/:userId", requireAuth, getUser);

// @route   PATCH api/users/:userId
// @desc    Update specific field(s) in user
// @access  Private
router.patch("/:userId", requireAuth, updateUser);

// @route   DELETE api/users/:userId
// @desc    Deletes a specific user
// @access  Private
router.delete("/:userId", requireAuth, deleteUser);

module.exports = router;
