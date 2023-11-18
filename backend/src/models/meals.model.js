const connection = require('./connection');


const getAll = async () => {
  const [meals] = await connection.execute('SELECT * FROM meals');
  return meals;
}

module.exports = {
  getAll,
}