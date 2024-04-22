const connectDB = async () => {
    try {
        // DB connection code goes here
        // Use any ORM or ODM depending on requirement

        return console.log("DB Connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
