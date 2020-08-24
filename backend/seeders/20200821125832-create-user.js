'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'john.doe@email.com',
      username: 'John Doe',
      roles: '["ROLE_USER"]',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'john.doe2@email.com',
      username: 'John Doe2',
      roles: '["ROLE_USER"]',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'moderator@email.com',
      username: 'Moderator',
      roles: '["ROLE_MODERATOR"]',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
