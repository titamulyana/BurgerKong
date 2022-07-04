'use strict';

const { createHash } = require('../helpers/bcrypt');

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
   const data = require('../data/ingredient.json')
   data.forEach(el => {
     el.createdAt = new Date()
     el.updatedAt = new Date()
   })

   await queryInterface.bulkInsert("Ingredients", data, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
