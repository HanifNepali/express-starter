const express = require("express");
const router = express.Router();

const { requireAuth } = require("../../middleware/auth");
const { register, login, logout } = require("../../controllers/authController");
const {
    registrationValidation,
    loginValidation,
    validate,
} = require("../../utils/validation");

// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post("/register", registrationValidation(), validate, register);

// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post("/login", loginValidation(), validate, login);

// @route   GET api/auth/logout
// @desc    Logout user
// @access  Private
router.get("/logout", requireAuth, logout);

module.exports = router;
