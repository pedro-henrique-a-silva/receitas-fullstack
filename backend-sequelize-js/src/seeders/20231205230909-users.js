/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
    { id: 1, name: "user01" , username: 'email@email.com', password: '1234567890' },
    { id: 2, name: "user02", username: 'email2@email.com', password: '1234567890' },
   ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
