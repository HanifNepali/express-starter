const { check, validationResult } = require("express-validator");

// User registration validation
const registrationValidation = () => {
    return [
        // firstname
        check("firstName")
            .not()
            .isEmpty()
            .withMessage("Please provide your first name"),
        // email
        // can attach custom validation here for email to check if user with email exists in db
        check("email")
            .not()
            .isEmpty()
            .withMessage("Please provide your email address")
            .isEmail()
            .withMessage("Please provide a valid email address"),
        // password must be at least 8 chars long and contain a number
        check("password")
            .not()
            .isEmpty()
            .withMessage("Please provide your password")
            .isLength({ min: 8 })
            .withMessage("must be at least 8 chars long")
            .matches(/\d/)
            .withMessage("must contain a number"),
    ];
};

// User login validation
const loginValidation = () => {
    return [
        // email
        check("email")
            .not()
            .isEmpty()
            .withMessage("Please provide your email address")
            .isEmail()
            .withMessage("Please provide a valid email address"),
        // password
        check("password")
            .not()
            .isEmpty()
            .withMessage("Please provide your password"),
    ];
};

// Validates the defined functions
const validate = async (req, res, next) => {
    const errors = await validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({ data: errors.array() });
};

module.exports = { registrationValidation, loginValidation, validate };
