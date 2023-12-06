const { Recipe } = require('../models')

const getAll = async () => {
  const allMeals = await Recipe.findAll({where : {recipeType: 'meal'}})
  return allMeals
}

module.exports = {
  getAll,
}