


import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('favorites', [
      {user_id: 1,recipe_id: 52769},
      {user_id: 1,recipe_id: 12450},
      {user_id: 2,recipe_id: 52887},
      {user_id: 2,recipe_id: 13332}
     ])
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('favorites', {});
  },
};