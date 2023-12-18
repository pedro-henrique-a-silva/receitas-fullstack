const { User } = require('../models')
const jwt = require('jsonwebtoken')

const login = async (userData) => {
  const user = await User.findOne({where: userData})

  if (!user) return {status: "INVALID_DATA", message: "Dados incorretos"}

  const secret = process.env.JWT_SECRET;

  const payload = {
    id: user.id,
    username: user.username
  }

  const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

  const token = jwt.sign({ payload }, secret, jwtConfig);

  return {status: "SUCCESS", message: { token }}
}

const signup = async (userData) => {
  const { username } = userData;
  const user = await User.findOne({where: {username}})

  if (user) return {status: "CONFLICT", message: "Dados incorretos"}

  const userCreated = await User.create(userData)
  return {status: "CREATED", message: userCreated}
}

module.exports = {
  login,
  signup
}