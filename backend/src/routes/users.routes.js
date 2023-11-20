const express = require('express');
const {usersModel} = require('../models/index')
const usersRouter = express.Router();


usersRouter.post('/', async (req, res) => {
  const {username} = req.body;
  const userData = await usersModel.getUserByUsername(username);

  return res.status(200).json(userData);
});

module.exports = usersRouter;