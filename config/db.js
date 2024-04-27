const Sequelize = require("sequelize");

const config = require("../config/dbConfig.json");
const dotenv = require("dotenv");
dotenv.config();

// Initialize Sequelize with database credentials
const env = process.env.NODE_ENV || "development";
const db = new Sequelize(config[env]);

const connectDB = async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log("Database connection has been established successfully.");
    } catch (err) {
        console.error("Unable to connect to the database:", err);
        process.exit(1);
    }
};

module.exports = { connectDB, db };
