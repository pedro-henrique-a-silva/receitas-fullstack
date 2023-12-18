const mealsService = require('./meals.service');
const drinksService = require('./drinks.service');
const userService = require('./user.service');
const favoritesService = require('./favorites.service')
const donesService = require('./dones.service')

module.exports = {
  mealsService,
  drinksService,
  userService,
  favoritesService,
  donesService
}