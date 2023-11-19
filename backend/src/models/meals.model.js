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

const findByCategory = async (categoryName) => {
  const [filtered] = await connection.execute(`
    SELECT * FROM meals m
    INNER JOIN meals_categories mc 
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