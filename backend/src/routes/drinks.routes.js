const express = require('express');
const { drinksService } = require('../services/index')
const drinksRouter = express.Router();

drinksRouter.get('/all', async (req, res) => {
  const allDrinks = await drinksService.getAll();

  return res.status(httpMap[allDrinks.status]).json(allDrinks.message);
})

drinksRouter.get('/all/categories', async (req, res) => {
  const allDrinksCategories = await drinksService.getAllCategories();

  return res.status(httpMap[allDrinksCategories.status]).json(allDrinksCategories.message);
})

drinksRouter.get('/category/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  const filteredDrinks = await drinksService.findByCategory(categoryName);

  return res.status(httpMap[filteredDrinks.status]).json(filteredDrinks.message);
})

drinksRouter.get('/:drinksId', async (req, res) => {
  const { drinksId } = req.params;
  const drink = await drinksService.findById(drinksId);

  return res.status(httpMap[drink.status]).json(drink.message);
})

module.exports = drinksRouter;