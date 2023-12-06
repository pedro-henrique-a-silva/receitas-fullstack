const express = require('express');
const { mealsService } = require('../services/index')
const mealsRouter = express.Router();

mealsRouter.get('/all', async (req, res) => {
  const allMeals = await mealsService.getAll();

  res.status(200).json(allMeals);
})

mealsRouter.get('/all/categories', async (req, res) => {
  const allCategories = await mealsModel.getAllCategories();

  res.status(200).json(allCategories);
})

mealsRouter.get('/category/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  const filteredMeals = await mealsModel.findByCategory(categoryName);

  res.status(200).json(filteredMeals);
})

mealsRouter.get('/:mealsId', async (req, res) => {
  const { mealsId } = req.params;
  const meal = await mealsModel.findById(mealsId);
  res.status(200).json(meal);
})



module.exports = mealsRouter;