const { User } = require('../models')

const login = async (userData) => {
  const user = await User.findOne({where: userData})

  if (!user) return {status: "INVALID_DATA", message: "Dados incorretos"}

  return {status: "SUCCESS", message: user}
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