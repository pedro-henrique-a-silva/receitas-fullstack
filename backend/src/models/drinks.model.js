const connection = require('./connection');


const getAll = async () => {
  const [drinks] = await connection.execute('SELECT * FROM drinks');
  return drinks;
}

module.exports = {
  getAll,
}