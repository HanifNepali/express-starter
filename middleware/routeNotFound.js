const routeNotFound = (req, res) => {
    // console log the request
    console.log(req);

    const err = new Error("Requested page does not exist");
    err.status = 404;

    res.send({
        error: {
            status: err.status || 500,
            errorMsg: err.message,
        },
    });
};

module.exports = routeNotFound;
