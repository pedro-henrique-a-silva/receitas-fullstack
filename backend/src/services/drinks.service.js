const { Recipe } = require('../models')

const getAll = async () => {
  const allDrinks = await Recipe.findAll({where: {recipeType: 'drink'}})
  return allDrinks
}

module.exports = {
  getAll,
}