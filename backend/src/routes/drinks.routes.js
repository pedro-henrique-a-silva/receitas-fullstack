const express = require('express');
const {drinksModel} = require('../models/index')
const drinksRouter = express.Router();

drinksRouter.get('/all', async (req, res) => {
  const allDrinks = await drinksModel.getAll();

  res.status(200).json(allDrinks);
})

drinksRouter.get('/all/categories', async (req, res) => {
  const allDrinksCategories = await drinksModel.getAllCategories();

  res.status(200).json(allDrinksCategories);
})

drinksRouter.get('/category/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  const filteredDrinks = await drinksModel.findByCategory(categoryId);

  res.status(200).json(filteredDrinks);
})

module.exports = drinksRouter;