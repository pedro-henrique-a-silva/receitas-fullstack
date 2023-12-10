const express = require('express');
const { drinkController } = require('../controllers');
const { authMiddleware } = require('../middleware')
const drinksRouter = express.Router();

drinksRouter.use(authMiddleware.auth)

drinksRouter.get('/all',drinkController.all)

drinksRouter.get('/all/categories',drinkController.allCategories)

drinksRouter.get('/category/:categoryName',drinkController.findByCategoryName)

drinksRouter.get('/:drinksId', drinkController.findById)

module.exports = drinksRouter;