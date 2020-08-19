require('dotenv').config();
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = require('./User');
const Post = require('./Post');

const Comment = db.define('Comment', {
    'id': {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
    },
    'message': {
        type: DataTypes.TEXT,
        allowNull: false
    },
    'owner_id': {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    'post_id': {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
            model: Post,
            key: 'id',
        }
    }
});

module.exports = Comment;
