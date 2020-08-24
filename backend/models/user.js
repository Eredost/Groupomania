'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull:     false,
      primaryKey:    true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true,
      notEmpty: {
        msg: 'L\'email ne peut pas être vide',
      },
      isEmail: {
        msg: 'Le format de l\'email n\'est pas correct',
      }
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      notEmpty: {
        msg: 'Le nom d\'utilisateur ne peut pas être vide',
      },
      min: {
        args: 3,
        msg: 'Le nom d\'utilisateur doit contenir au minimum 3 caractères',
      },
      max: {
        args: 60,
        msg: 'Le nom d\'utilisateur doit contenir au maximum 60 caractères',
      }
    },
    roles: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: ['ROLE_USER'],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
