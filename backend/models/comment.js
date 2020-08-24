'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE',
      });
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
      })
    }
  };
  Comment.init({
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull:     false,
      primaryKey:    true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      notEmpty: {
        msg: 'Le contenu du commentaire ne peut pas être vide'
      },
      max : {
        args: 200,
        msg: 'Le contenu du commentaire ne peut pas dépasser 200 caractères',
      }
    },
    ownerId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      isInt: true,
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
