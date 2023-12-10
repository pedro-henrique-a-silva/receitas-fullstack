const { mealsService } = require('../services/index')
const httpMap = require('../utils/httpMap')

const all = async (req, res) => {
  const allMeals = await mealsService.getAll();

  return res.status(httpMap[allMeals.status]).json(allMeals.message);
}

const allCategories = async (req, res) => {
  const allCategories = await mealsService.getAllCategories();

  return res.status(httpMap[allCategories.status]).json(allCategories.message);
}

const findByCategoryName = async (req, res) => {
  const { categoryName } = req.params;
  const filteredMeals = await mealsService.findByCategory(categoryName);

  return res.status(httpMap[filteredMeals.status]).json(filteredMeals.message);
}

const findById = async (req, res) => {
  const { mealsId } = req.params;
  const meal = await mealsService.findById(mealsId);
  return res.status(httpMap[meal.status]).json(meal.message);
}

module.exports = {
  all,
  allCategories,
  findByCategoryName,
  findById
}