import { QueryInterface } from 'sequelize';
import BCryptHashService from '../../utils/Hash';

const hashService = new BCryptHashService()

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      { 
        id: 1, 
        name: "user01" , 
        username: 'email@email.com', 
        password: hashService.hash('123456')
        // password: '123456'
      },
      { 
        id: 2, 
        name: "user02", 
        username: 'email2@email.com', 
        password: hashService.hash('123456')
        // password: '123456'
      },
     ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};