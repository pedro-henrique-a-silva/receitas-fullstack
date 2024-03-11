import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('categories', [
      {id: 1,category_name: "Beef" ,category_type: "meal"},
      {id: 2,category_name: "Breakfast" ,category_type: "meal"},
      {id: 3,category_name: "Chicken" ,category_type: "meal"},
      {id: 4,category_name: "Dessert" ,category_type: "meal"},
      {id: 5,category_name: "Goat" ,category_type: "meal"},
      {id: 6,category_name: "Lamb" ,category_type: "meal"},
      {id: 7,category_name: "Miscellaneous" ,category_type: "meal"},
      {id: 8,category_name: "Pasta" ,category_type: "meal"},
      {id: 9,category_name: "Pork" ,category_type: "meal"},
      {id: 10,category_name: "Seafood" ,category_type: "meal"},
      {id: 11,category_name: "Side" ,category_type: "meal"},
      {id: 12,category_name: "Starter" ,category_type: "meal"},
      {id: 13,category_name: "Vegan" ,category_type: "meal"},
      {id: 14,category_name: "Vegetarian" ,category_type: "meal"},
      {id: 15,category_name: "Ordinary drink",category_type: "drink"},
      {id: 16,category_name: "Cocktail" ,category_type: "drink"},
      {id: 17,category_name: "Shake" ,category_type: "drink"},
      {id: 18,category_name: "Other / Unknown",category_type: "drink"},
      {id: 19,category_name: "Cocoa" ,category_type: "drink"},
      {id: 20,category_name: "Shot" ,category_type: "drink"},
      {id: 21,category_name: "Coffee / Tea",category_type: "drink"},
      {id: 22,category_name: "Homemade Liqueur",category_type: "drink"},
      {id: 23,category_name: "Punch / Party drink",category_type: "drink"},
      {id: 24,category_name: "Beer" ,category_type: "drink"},
      {id: 26,category_name: "Soft drink", category_type: "drink"}
     ])
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('categories', {});
  },
};