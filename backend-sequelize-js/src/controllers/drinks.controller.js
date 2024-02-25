const { drinksService } = require('../services/index');
const httpMap = require('../utils/httpMap')

const all = async (req, res) => {
  const allDrinks = await drinksService.getAll();

  return res.status(httpMap[allDrinks.status]).json(allDrinks.message);
}

const allCategories = async (req, res) => {
  const allDrinksCategories = await drinksService.getAllCategories();

  return res.status(httpMap[allDrinksCategories.status]).json(allDrinksCategories.message);
}

const findByCategoryName = async (req, res) => {
  const { categoryName } = req.params;
  const filteredDrinks = await drinksService.findByCategory(categoryName);

  return res.status(httpMap[filteredDrinks.status]).json(filteredDrinks.message);
}

const findById = async (req, res) => {
  const { drinksId } = req.params;
  const { id } = req.user;
  const drink = await drinksService.findById(drinksId, id);

  return res.status(httpMap[drink.status]).json(drink.message);
}

module.exports = {
  all,
  allCategories,
  findByCategoryName,
  findById
}