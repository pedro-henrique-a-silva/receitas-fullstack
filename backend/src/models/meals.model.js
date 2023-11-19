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

const findById = async (mealId) => {
  const [[meal]] = await connection.execute(`SELECT * FROM meals WHERE id_meal = ?`, [mealId])
  return camelize(meal);
} 

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
  findById
}