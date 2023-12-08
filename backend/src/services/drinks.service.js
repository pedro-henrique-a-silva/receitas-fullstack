const { Recipe, Category } = require('../models')

const getAll = async () => {
  const allDrinks = await Recipe.findAll({
    where: {recipeType: 'drink'}, 
    order: [['strName', 'ASC']]
  })
  return allDrinks
}

const getAllCategories = async () => {
  const allDrinksCategories = await Category.findAll({
    attributes: [ 'categoryName'],
    where : {categoryType: 'drink'}
  })
  return allDrinksCategories
}

const findByCategory = async (name) => {
  const allDrinks = await Recipe.findAll({
    include: { 
      model: Category, 
      as: 'category', 
      where: { categoryName: name },
      attributes: [ 'categoryName']
    },
    where : { recipeType: 'drink' },
    order: [['strName', 'ASC']]
  })

  return allDrinks
}

const findById = async (drinkId) => {
  const drink = await Recipe.findByPk(drinkId, {
    include: { 
      model: Category,
      as: 'category', 
      attributes: [ 'categoryName']
    },
  })

  return drink
}

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
  findById
}