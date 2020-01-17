const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    Blog
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/api/blogs/', (req, res) => {
    Blog
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/api/blogs/featured', (req, res) => {
    Blog
        .where()
        .then(users => {
            res.status(200).json(users);
        });
});

router.post('/api/blogs/:id', (req, res) => {
    Blog
        .findById()
        .then(users => {
            res.status(200).json(users);
        });
});

router.put('/api/blogs', (req, res) => {
    Blog
        .save()
        .then(users => {
            res.status(200).json(users);
        });
});

router.delete('/api/blogs/:id', (req, res) => {
    Blog
        .findByIdAndUpdate()
        .then(users => {
            res.status(200).json(users);
        });
});

router.delete('/api/blogs/:id', (req, res) => {
    Blog
        .findByIdAndRemove()
        .then(users => {
            res.status(200).json(users);
        });
});

module.exports = router;