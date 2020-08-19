require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();

// Sequelize connecting to the database
const sequelize = new Sequelize(process.env.DATABASE_URI);
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully');
    })
    .catch(error => {
        console.log('Unable to connect to the database : ', error);
    })

// Configuring CORS Headers
const corsOptions = {
    origin: 'http://localhost:3001',
    allowedHeaders: 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization'
};
app.use(cors(corsOptions));

app.use('/', (req, res, next) => {
    res.send(process.env.DATABASE_URI);
})

//app.use('/api/auth');
//app.use('/api/posts');
//app.use('/api/comments');

module.exports = app;
