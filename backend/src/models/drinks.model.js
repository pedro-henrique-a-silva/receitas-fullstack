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

const findByCategory = async (categoryName) => {
  const [filtered] = await connection.execute(`
    SELECT * FROM drinks m
    INNER JOIN drinks_categories mc 
    ON m.id_category = mc.id
    WHERE category_name = ?`,
    [categoryName]
  );

  return camelize(filtered);
}

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
}