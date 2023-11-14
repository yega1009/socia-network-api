// Import necessary modules
const express = require('express'); // Import the express framework
const db = require('./config/connection'); // Import the database connection configuration
const routes = require('./routes'); // Import the routes defined in the application

const PORT = process.env.PORT || 3001; // Set the port for the server, either from an environment variable or default to 3001
const app = express(); // Create an instance of an express application

// Middleware setup
app.use(express.json()); // Use express.json middleware to parse JSON bodies in requests
app.use(express.urlencoded({ extended: true })); // Use express.urlencoded to parse URL-encoded bodies with the querystring library

// Use the routes defined in the 'routes' directory
app.use(routes);

// Start the server once the database connection is open
db.once('open', () => {
    app.listen(PORT, () => { // Start the express server on the specified PORT
        console.log(`Server running on port ${PORT}!`); // Log a message to the console when the server is running
    });
});
