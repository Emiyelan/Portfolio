require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Fallback Data
const fallbackProfile = {
    name: 'Emmanuel Makaringe',
    title: 'Software Engineer',
    email: 'Emakaringe65@gmail.com',
    phone: '067 693 7921',
    github: 'https://github.com/Emiyelan',
    linkedin: 'https://www.linkedin.com/in/emmanuel-makaringe-753033216',
    bio: 'Passionate developer proficient in the MERN stack. I love building web applications that solve real-world problems.'
};

let isDbConnected = false;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
})
    .then(() => {
        console.log('MongoDB connected');
        isDbConnected = true;
    })
    .catch(err => {
        console.warn('MongoDB connection invalid or timed out. Using fallback data.');
        console.warn('Error:', err.message);
    });

// Schema
const ProfileSchema = new mongoose.Schema({
    name: String,
    title: String,
    email: String,
    phone: String,
    github: String,
    linkedin: String,
    bio: String
});
const Profile = mongoose.model('Profile', ProfileSchema);

// API Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Get Profile Info
app.get('/api/profile', async (req, res) => {
    if (isDbConnected) {
        try {
            const profile = await Profile.findOne();
            res.json(profile || fallbackProfile);
        } catch (err) {
            console.error(err);
            res.json(fallbackProfile);
        }
    } else {
        res.json(fallbackProfile);
    }
});

// Get GitHub Projects
app.get('/api/projects', async (req, res) => {
    try {
        const githubUsername = 'Emiyelan';
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
        res.json(response.data);
    } catch (err) {
        console.error('GitHub API Error:', err.message);
        // Fallback projects if GitHub fails
        res.json([
            { id: 1, name: 'Portfolio-MERN', description: 'My personal portfolio website built with MERN stack.', html_url: 'https://github.com/Emiyelan', language: 'JavaScript' },
            { id: 2, name: 'Project-Placeholder', description: 'A sample project to demonstrate the gallery.', html_url: 'https://github.com/Emiyelan', language: 'JavaScript' }
        ]);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
