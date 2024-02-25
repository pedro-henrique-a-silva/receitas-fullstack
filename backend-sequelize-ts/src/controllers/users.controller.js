const { userService } = require('../services/index')
const httpMap = require('../utils/httpMap')

const login = async (req, res) => {
  const { username, password } = req.body

  const userAuth = await userService.login({ username, password })

  return res.status(httpMap[userAuth.status]).json(userAuth.message)
}

const signup = async (req, res) => {
  const {name, username, password } = req.body

  const userAuth = await userService.signup({name, username, password })

  return res.status(httpMap[userAuth.status]).json(userAuth.message)
}

module.exports = {
  login,
  signup
}