const connection = require('./connection');


const getAll = async () => {
  const [meals] = await connection.execute('SELECT * FROM meals');
  return meals;
}

const getAllCategories = async () => {
  const [categories] = await connection.execute('SELECT * FROM meals_categories');
  return categories
}

module.exports = {
  getAll,
  getAllCategories,
}