const { Recipe, Category } = require('../models')

const getAll = async () => {
  const allMeals = await Recipe.findAll({
    where : {recipeType: 'meal'},
    order: [['strName', 'ASC']]
  })
  return allMeals
}

const getAllCategories = async () => {
  const allMealsCategories = await Category.findAll({
    attributes: [ 'categoryName'],
    where : {categoryType: 'meal'}
  })
  return allMealsCategories
}

const findByCategory = async (name) => {
  const allMeals = await Recipe.findAll({
    include: { 
      model: Category, 
      as: 'category', 
      where: { categoryName: name },
      attributes: [ 'categoryName']
    },
    where : { recipeType: 'meal' },
    order: [['strName', 'ASC']]
  })

  return allMeals
}

module.exports = {
  getAll,
  getAllCategories,
  findByCategory
}