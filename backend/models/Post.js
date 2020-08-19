require('dotenv').config();
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = require('./User');

const Post = db.define('Post', {
    'id': {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
    },
    'content': {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    'image': {
        type: DataTypes.STRING,
    },
    'owner_id': {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    }
});

module.exports = Post;
