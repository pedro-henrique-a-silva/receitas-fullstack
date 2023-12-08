const express = require('express');
const { drinksService } = require('../services/index')
const drinksRouter = express.Router();

drinksRouter.get('/all', async (req, res) => {
  const allDrinks = await drinksService.getAll();

  res.status(200).json(allDrinks);
})

drinksRouter.get('/all/categories', async (req, res) => {
  const allDrinksCategories = await drinksService.getAllCategories();

  res.status(200).json(allDrinksCategories);
})

drinksRouter.get('/category/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  const filteredDrinks = await drinksService.findByCategory(categoryId);

  res.status(200).json(filteredDrinks);
})

drinksRouter.get('/:drinksId', async (req, res) => {
  const { drinksId } = req.params;
  const drink = await drinksService.findById(drinksId);

  res.status(200).json(drink);
})

module.exports = drinksRouter;