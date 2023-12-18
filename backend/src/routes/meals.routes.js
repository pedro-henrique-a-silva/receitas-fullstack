const express = require('express');
const { mealController } = require('../controllers')
const { authMiddleware } = require('../middleware')
const mealsRouter = express.Router();

mealsRouter.use(authMiddleware.auth)

mealsRouter.get('/all', mealController.all)

mealsRouter.get('/all/categories', mealController.allCategories)

mealsRouter.get('/category/:categoryName', mealController.findByCategoryName)

mealsRouter.get('/:mealsId', mealController.findById)



module.exports = mealsRouter;