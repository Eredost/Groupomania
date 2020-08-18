const express = require('express');
require('dotenv').config();

const app = express();

app.use('/', (req, res, next) => {
    res.send('Hello world');
});

module.exports = app;
