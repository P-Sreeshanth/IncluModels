const express = require('express');
const router = express.Router();
const Model = require('../models/Model');

// User registration (placeholder)
router.post('/register', (req, res) => {
    res.send('User registered');
});

// User login (placeholder)
router.post('/login', (req, res) => {
    res.send('User logged in');
});

module.exports = router;
