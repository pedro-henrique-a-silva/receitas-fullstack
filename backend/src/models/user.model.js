const connection = require('./connection');
const camelize = require('camelize');

const getUserByUsername = async (username) => {
  const [[userData]] = await connection.execute(`
    SELECT * FROM users
    WHERE username = ?
  `,[username])

  return userData;
};

module.exports = {
  getUserByUsername,
}