const express = require('express');
const { userService } = require('../services/index')
const userRouter = express.Router();
const httpMap = require('../utils/httpMap')

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body

  const userAuth = await userService.login({ username, password })

  return res.status(httpMap[userAuth.status]).json(userAuth.message)
})

userRouter.post('/signup', async (req, res) => {
  const {name, username, password } = req.body

  const userAuth = await userService.signup({name, username, password })

  return res.status(httpMap[userAuth.status]).json(userAuth.message)
})

module.exports = userRouter;