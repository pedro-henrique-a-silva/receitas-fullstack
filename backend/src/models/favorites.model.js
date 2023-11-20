const connection = require('./connection');
const camelize = require('camelize');

const getAll = async (username) => {
  const [favorites] = await connection.execute(`
  SELECT * FROM favorites f
  INNER JOIN users u ON u.id = f.user_id
  LEFT JOIN (SELECT * FROM meals
    INNER JOIN meals_categories mc 
    ON meals.id_category = mc.id) m ON f.id_meal = m.id_meal
  LEFT JOIN (SELECT * FROM drinks
      INNER JOIN drinks_categories mc 
      ON drinks.id_category = mc.id) d on f.id_drink = d.id_drink
  WHERE username = ?;
  `, [username])

  return camelize(favorites);
}

module.exports = {
  getAll,
}