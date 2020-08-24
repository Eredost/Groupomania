'use strict';

const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await db.User.findAll();
    const posts = [];
    for (const user of users) {
      for (let i = 0; i < 2; i++) {
        posts.push({
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ligula tristique, vestibulum ante et, condimentum velit. In pulvinar consequat orci quis maximus. Integer mattis commodo erat, at feugiat diam dictum sed. Sed nulla ex, posuere non dui id, vestibulum euismod odio. Nunc ac fringilla felis. Fusce id cursus erat. Nam magna leo, viverra in tempus vel, vestibulum vitae justo. Mauris tempor velit non purus egestas fermentum. ',
          ownerId: user.id,
          createdAt: new Date(new Date().setDate(new Date().getDate() - user.id)),
          updatedAt: new Date(new Date().setDate(new Date().getDate() - user.id)),
        })
      }
    }
    await queryInterface.bulkInsert('posts', posts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
