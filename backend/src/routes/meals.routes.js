const express = require('express');
const {mealsModel} = require('../models/index')
const mealsRouter = express.Router();

mealsRouter.get('/all', async (req, res) => {
  const allMeals = await mealsModel.getAll();

  res.status(200).json(allMeals);
})


module.exports = mealsRouter;