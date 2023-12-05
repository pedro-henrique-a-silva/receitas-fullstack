const connection = require('./connection');
const camelize = require('camelize');

const getAll = async () => {
  const [drinks] = await connection.execute(`
  SELECT * FROM recipes WHERE recipe_type = 'drink'
`);
  return camelize(drinks);
}

const getAllCategories = async () => {
  const [categories] = await connection.execute(`
  SELECT category_name FROM categories WHERE category_type = 'drink'
`);
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

const findById = async (drinkId) => {
  const [[drink]] = await connection.execute(`SELECT * FROM drinks WHERE id_drink = ?`, [drinkId])
  return camelize(drink);
} 

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
  findById
}