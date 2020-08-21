require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

// Sequelize tries to connect to the database
db.sequelize
    .authenticate()
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

app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

module.exports = app;
