'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('done', {
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
      id_recipe: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'recipes',
          key: 'id',
        },
        onDelete: 'CASCADE', 
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('done');
  }
};