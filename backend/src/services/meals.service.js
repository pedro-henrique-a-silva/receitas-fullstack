const { Recipe, Category } = require('../models')

const getAll = async () => {
  const allMeals = await Recipe.findAll({where : {recipeType: 'meal'}})
  return allMeals
}

const getAllCategories = async () => {
  const allMealsCategories = await Category.findAll({
    attributes: [ 'categoryName'],
    where : {categoryType: 'meal'}
  })
  return allMealsCategories
}

module.exports = {
  getAll,
  getAllCategories
}