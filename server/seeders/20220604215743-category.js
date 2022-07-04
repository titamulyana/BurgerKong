'use strict';

const { createHash } = require('../helpers/bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
   const category = require('../data/category.json')
   category.forEach(el => {
     el.createdAt = new Date()
     el.updatedAt = new Date()
   })

   await queryInterface.bulkInsert("Categories", category, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
     await queryInterface.bulkDelete('Categories', null, {});
  }
};

