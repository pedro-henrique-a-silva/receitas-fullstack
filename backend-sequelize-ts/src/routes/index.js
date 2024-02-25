const mealsRouter = require('./meals.routes');
const drinksRouter = require('./drinks.routes');
const userRouter = require('./user.routes');
const favoritesRouter = require('./favorites.routes')
const doneRouter = require('./dones.routes')

module.exports = {
  mealsRouter,
  drinksRouter,
  userRouter,
  favoritesRouter,
  doneRouter
}