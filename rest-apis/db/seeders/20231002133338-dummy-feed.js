'use strict';

/** @type {import('sequelize-cli').Migration} */
const {v4: uuidv4} = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Feeds', [{
      id: uuidv4(),
      title: 'Title Test',
      content: 'Content Test',
      category: 'Category Test',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: uuidv4(),
      title: 'Title Test 2',
      content: 'Content Test 2',
      category: 'Category Test 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Feeds', null, {});
  }
};
