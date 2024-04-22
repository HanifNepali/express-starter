const requireAuth = async (req, res, next) => {
    try {
        // console log req for dummy purpose
        console.log(req);

        // authentication code goes here

        // call the next handler function
        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

module.exports = {
    requireAuth,
};
