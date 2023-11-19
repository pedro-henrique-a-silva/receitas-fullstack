const connection = require('./connection');


const getAll = async () => {
  const [drinks] = await connection.execute('SELECT * FROM drinks');
  return drinks;
}

const getAllCategories = async () => {
  const [categories] = await connection.execute('SELECT * FROM drinks_categories');
  return categories;
}

module.exports = {
  getAll,
  getAllCategories,
}