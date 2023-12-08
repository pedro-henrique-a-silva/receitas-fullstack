const { Recipe, Category } = require('../models')

const getAll = async () => {
  const allDrinks = await Recipe.findAll({where: {recipeType: 'drink'}})
  return allDrinks
}

const getAllCategories = async () => {
  const allDrinksCategories = await Category.findAll({
    attributes: [ 'categoryName'],
    where : {categoryType: 'drink'}
  })
  return allDrinksCategories
}

module.exports = {
  getAll,
  getAllCategories
}