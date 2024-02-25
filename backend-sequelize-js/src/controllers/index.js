const drinkController = require('./drinks.controller');
const mealController = require('./meals.controller');
const userController = require('./users.controller');
const favoritesController = require('./favorites.controller')
const donesController = require('./done.controller')

module.exports = {
  drinkController,
  mealController,
  userController,
  favoritesController,
  donesController
}