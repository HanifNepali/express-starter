const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, errors } = format;

const dotenv = require("dotenv");
dotenv.config();

const logFormat = printf(({ level, message, timestamp, stack }) => {
    const format = `${timestamp} ${level}: ${message}`;
    return stack ? format + stack : format;
});

const logger = createLogger({
    level: "info",
    format: combine(
        errors({ stack: true }),
        timestamp({
            format: "YYYY-MM-DD hh:mm:ss.SSS A",
        }),
        logFormat
    ),
    transports: [new transports.Console()],
    exitOnError: false,
});

// If env is development then create log files
if (process.env.NODE_ENV === "development") {
    logger.add(
        new DailyRotateFile({
            filename: "logs/all.log",
            datePattern: "YYYY-MM-DD",
            maxFiles: "2d",
            level: "info", // minimum severity of 'info' including fatal, error and warn
        })
    );
}

const logRouteInfo = (req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
};

module.exports = { logger, logRouteInfo };
