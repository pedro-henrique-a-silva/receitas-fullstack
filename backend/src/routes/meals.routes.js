const express = require('express');
const { mealsService } = require('../services/index')
const mealsRouter = express.Router();
const httpMap = require('../utils/httpMap')

mealsRouter.get('/all', async (req, res) => {
  const allMeals = await mealsService.getAll();

  return res.status(httpMap[allMeals.status]).json(allMeals.message);
})

mealsRouter.get('/all/categories', async (req, res) => {
  const allCategories = await mealsService.getAllCategories();

  return res.status(httpMap[allCategories.status]).json(allCategories.message);
})

mealsRouter.get('/category/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  const filteredMeals = await mealsService.findByCategory(categoryName);

  return res.status(httpMap[filteredMeals.status]).json(filteredMeals.message);
})

mealsRouter.get('/:mealsId', async (req, res) => {
  const { mealsId } = req.params;
  const meal = await mealsService.findById(mealsId);
  return res.status(httpMap[meal.status]).json(meal.message);
})



module.exports = mealsRouter;