const app = require("./app");
const connectDB = require('./DB/connect');

// Connect to the database
connectDB().then(() => {
    // Start the server only after DB connection is successful
    const server = app.listen(5000, () => {
        console.log('Server started on http://localhost:5000');
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err) => {
        console.log(`Shutting down the server for ${err.message}`);
        console.log('Shutting down the server for unhandled promise rejection');

        server.close(() => {
            process.exit(1);
        });
    });
}).catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the process with failure code
});
