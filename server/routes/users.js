const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/api/users/', (req, res) => {
    User
        .find()
        .then(users => {
            res.status(200).json(users);
        });
});

router.get('/api/users/:id', (req, res) => {
    User
        .findById()
        .then(users => {
            res.status(200).json(users);
        });
});

router.post('/api/users/', (req, res) => {
    User
        .save()
        .then(users => {
            res.status(200).json(users);
        });
});

router.put('/api/users/:id', (req, res) => {
    User
        .findByIdAndUpdate()
        .then(users => {
            res.status(200).json(users);
        });
});

router.delete('/api/users/:id', (req, res) => {
    User
        .findByIdAndRemove()
        .then(users => {
            res.status(200).json(users);
        });
});

module.exports = router;