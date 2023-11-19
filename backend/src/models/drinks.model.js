const connection = require('./connection');
const camelize = require('camelize');

const getAll = async () => {
  const [drinks] = await connection.execute('SELECT * FROM drinks');
  return camelize(drinks);
}

const getAllCategories = async () => {
  const [categories] = await connection.execute('SELECT * FROM drinks_categories');
  return camelize(categories);
}

module.exports = {
  getAll,
  getAllCategories,
}