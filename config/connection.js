const { connect, connection } = require('mongoose');

// Define the MongoDB connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

// Connect to MongoDB using the connection string
connect(connectionString);

// Export the connection object to be used elsewhere in the project
module.exports = connection;
