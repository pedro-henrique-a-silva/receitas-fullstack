const express = require('express');
const { mealController } = require('../controllers')
const mealsRouter = express.Router();

mealsRouter.get('/all', mealController.all)

mealsRouter.get('/all/categories', mealController.allCategories)

mealsRouter.get('/category/:categoryName', mealController.findByCategoryName)

mealsRouter.get('/:mealsId', mealController.findById)



module.exports = mealsRouter;