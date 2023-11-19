const connection = require('./connection');
const camelize = require('camelize');


const getAll = async () => {
  const [meals] = await connection.execute('SELECT * FROM meals');
  return camelize(meals);
}

const getAllCategories = async () => {
  const [categories] = await connection.execute('SELECT * FROM meals_categories');
  return camelize(categories);
}

module.exports = {
  getAll,
  getAllCategories,
}