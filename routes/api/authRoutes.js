const express = require("express");
const router = express.Router();

const { requireAuth } = require("../../middleware/auth");

const { register, login, logout } = require("../../controllers/authController");

// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post("/register", register);

// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post("/login", login);

// @route   GET api/auth/logout
// @desc    Logout user
// @access  Private
router.get("/logout", requireAuth, logout);

module.exports = router;