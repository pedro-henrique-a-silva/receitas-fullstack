const express = require('express');
const {drinksModel} = require('../models/index')
const drinksRouter = express.Router();

drinksRouter.get('/all', async (req, res) => {
  const allMeals = await drinksModel.getAll();

  res.status(200).json(allMeals);
})

module.exports = drinksRouter;