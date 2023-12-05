'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
       id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      category_type: {
        allowNull: false,
        type: Sequelize.STRING
      }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
