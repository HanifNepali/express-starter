const {
    registerUser,
    loginUser,
    logoutUser,
} = require("../services/authService");

const register = async (req, res) => {
    try {
        // console log req body for dummy purpose
        console.log(req.body);

        // login code goes here or use service function
        registerUser();

        // dummy response
        res.status(200).json({
            msg: "Registration successful",
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errMsg: "Server error" });
    }
};

const login = async (req, res) => {
    try {
        // console log req body for dummy purpose
        console.log(req.body);

        // login code goes here or use service function
        loginUser();

        // dummy response
        res.status(200).json({
            msg: "Login successful",
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errMsg: "Server error" });
    }
};

const logout = async (req, res) => {
    // console log req body for dummy purpose
    console.log(req.body);

    // logout code goes here or use service function
    logoutUser();

    // dummy response
    res.json({ msg: "Logged Out" });
};

module.exports = {
    login,
    logout,
    register,
};
