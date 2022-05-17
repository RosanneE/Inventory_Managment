// requiring a mongoose to get mongodb connection
const mongoose = require('mongoose');

// getting access to .env
require('dotenv').config();

// connect to Atlas through .env
const connectionStr = process.env.MONGODB_URI;

mongoose.connect(connectionStr);

// mongoDB connection on success
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected`)
})

// mongoDB connection on error
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ', error)
})

// disconnecting from mongoDB
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected')
})