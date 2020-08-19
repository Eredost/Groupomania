require('dotenv').config();
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
    'id': {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
    },
    'email': {
        type: DataTypes.STRING(180),
        allowNull: false,
        unique: true,
    },
    'username': {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
    },
    'roles': {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: ['ROLE_USER'],
    },
    'password': {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = User;
