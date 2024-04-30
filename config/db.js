const Sequelize = require("sequelize");

const config = require("../config/dbConfig.json");
const dotenv = require("dotenv");
dotenv.config();

const { logger } = require("../middleware/logger");

// Initialize Sequelize with database credentials
const env = process.env.NODE_ENV || "development";
const db = new Sequelize(config[env]);

const connectDB = async () => {
    try {
        await db.authenticate();
        await db.sync();
        logger.info("Database connection has been established successfully.");
    } catch (error) {
        logger.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};

module.exports = { connectDB, db };
