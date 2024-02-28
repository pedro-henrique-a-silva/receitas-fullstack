import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      { id: 1, name: "user01" , username: 'email@email.com', password: '1234567890' },
      { id: 2, name: "user02", username: 'email2@email.com', password: '1234567890' },
     ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};