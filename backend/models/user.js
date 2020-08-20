'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE'
      });
      this.hasMany(models.Comment, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE'
      });
    }
  };
  User.init({
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
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
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
