'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      str_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_category: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      recipe_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      str_alcoholic: {
        type: Sequelize.STRING
      },
      str_glass: {
        type: Sequelize.STRING
      },
      str_area: {
        type: Sequelize.STRING
      },
      str_instructions: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      str_thumb: {
        type: Sequelize.STRING
      },
      str_tags: {
        type: Sequelize.STRING
      },
      str_youtube: {
        type: Sequelize.STRING
      },
      str_ingredient1: {
        type: Sequelize.STRING
      },
      str_ingredient2: {
        type: Sequelize.STRING
      },
      str_ingredient3: {
        type: Sequelize.STRING
      },
      str_ingredient4: {
        type: Sequelize.STRING
      },
      str_ingredient5: {
        type: Sequelize.STRING
      },
      str_ingredient6: {
        type: Sequelize.STRING
      },
      str_ingredient7: {
        type: Sequelize.STRING
      },
      str_ingredient8: {
        type: Sequelize.STRING
      },
      str_ingredient9: {
        type: Sequelize.STRING
      },
      str_ingredient10: {
        type: Sequelize.STRING
      },
      str_ingredient11: {
        type: Sequelize.STRING
      },
      str_ingredient12: {
        type: Sequelize.STRING
      },
      str_ingredient13: {
        type: Sequelize.STRING
      },
      str_ingredient14: {
        type: Sequelize.STRING
      },
      str_ingredient15: {
        type: Sequelize.STRING
      },
      str_ingredient16: {
        type: Sequelize.STRING
      },
      str_ingredient17: {
        type: Sequelize.STRING
      },
      str_ingredient18: {
        type: Sequelize.STRING
      },
      str_ingredient19: {
        type: Sequelize.STRING
      },
      str_ingredient20: {
        type: Sequelize.STRING
      },
      str_measure1: {
        type: Sequelize.STRING
      },
      str_measure2: {
        type: Sequelize.STRING
      },
      str_measure3: {
        type: Sequelize.STRING
      },
      str_measure4: {
        type: Sequelize.STRING
      },
      str_measure5: {
        type: Sequelize.STRING
      },
      str_measure6: {
        type: Sequelize.STRING
      },
      str_measure7: {
        type: Sequelize.STRING
      },
      str_measure8: {
        type: Sequelize.STRING
      },
      str_measure9: {
        type: Sequelize.STRING
      },
      str_measure10: {
        type: Sequelize.STRING
      },
      str_measure11: {
        type: Sequelize.STRING
      },
      str_measure12: {
        type: Sequelize.STRING
      },
      str_measure13: {
        type: Sequelize.STRING
      },
      str_measure14: {
        type: Sequelize.STRING
      },
      str_measure15: {
        type: Sequelize.STRING
      },
      str_measure16: {
        type: Sequelize.STRING
      },
      str_measure17: {
        type: Sequelize.STRING
      },
      str_measure18: {
        type: Sequelize.STRING
      },
      str_measure19: {
        type: Sequelize.STRING
      },
      str_measure20: {
        type: Sequelize.STRING
      }
      });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('recipes');
  }
};
