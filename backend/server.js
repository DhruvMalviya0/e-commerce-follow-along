const app = require("./app");
const connectDatabase = require("./db/Database");
const path = require("path");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to an uncaught exception...`);
    process.exit(1);
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: path.join(__dirname, "config", ".env"),
    });
}

// Verify environment variables
if (!process.env.PORT || !process.env.MONGODB_URI) {
    console.error("Required environment variables are missing. Please check your .env file.");
    process.exit(1);
}

// Connect to the database
connectDatabase();

// Start the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    });
});

