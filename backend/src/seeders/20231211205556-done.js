'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('done', [
      {id_user: 1,id_recipe: 52769},
      {id_user: 1,id_recipe: 12450},
      {id_user: 2,id_recipe: 52887},
      {id_user: 2,id_recipe: 13332}
     ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('done', null, {});
  }
};
