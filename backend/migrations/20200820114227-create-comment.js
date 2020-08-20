'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comment', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull:     false,
        primaryKey:    true,
        autoIncrement: true,
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      ownerId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id'
        }
      },
      postId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'post',
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comment');
  }
};
