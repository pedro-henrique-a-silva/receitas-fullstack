const { Recipe, Category } = require('../models')

const getAll = async () => {
  const allDrinks = await Recipe.findAll({
    where: {recipeType: 'drink'}, 
    order: [['strName', 'ASC']]
  })
  return {status: "SUCCESS", messaage: allDrinks}
}

const getAllCategories = async () => {
  const allDrinksCategories = await Category.findAll({
    attributes: [ 'categoryName'],
    where : {categoryType: 'drink'}
  })
  return {status: "SUCCESS", message: allDrinksCategories}
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

  return {status: "SUCCESS", messsage: allDrinks}
}

const findById = async (drinkId) => {
  const drink = await Recipe.findByPk(drinkId, {
    include: { 
      model: Category,
      as: 'category', 
      attributes: [ 'categoryName']
    },
  })

  return {status: 'SUCCESS', message: drink}
}

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
  findById
}