const express = require('express');
const { drinkController } = require('../controllers');
const drinksRouter = express.Router();

drinksRouter.get('/all', drinkController.all)

drinksRouter.get('/all/categories', drinkController.allCategories)

drinksRouter.get('/category/:categoryName', drinkController.findByCategoryName)

drinksRouter.get('/:drinksId', drinkController.findById)

module.exports = drinksRouter;