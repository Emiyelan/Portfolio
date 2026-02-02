require('dotenv').config();
const mongoose = require('mongoose');

console.log("Attempting to connect to:", process.env.MONGODB_URI.replace(/:([^@]+)@/, ':****@'));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connection SUCCESS');
        process.exit(0);
    })
    .catch(err => {
        console.error('MongoDB connection FAILED');
        console.error(err.message);
        process.exit(1);
    });
