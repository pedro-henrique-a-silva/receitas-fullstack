const { Recipe, Category, Favorite } = require('../models')

const getAll = async () => {
  const allMeals = await Recipe.findAll({
    where : {recipeType: 'meal'},
    include: { 
      model: Category, 
      as: 'category', 
      attributes: [ 'categoryName']
    },
    order: [['strName', 'ASC']]
  })
  return {status: "SUCCESS", message: allMeals}
}

const getAllCategories = async () => {
  const allMealsCategories = await Category.findAll({
    attributes: [ 'categoryName'],
    where : {categoryType: 'meal'}
  })
  return {status: "SUCCESS", message: allMealsCategories}
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

  return {status: "SUCCESS", message: allMeals}
}

const findById = async (mealId, userId) => {
  const meal = await Recipe.findByPk(mealId, {
    include: { 
      model: Category,
      as: 'category', 
      attributes: [ 'categoryName']
    },
  })

  const favorite = await Favorite.findOne({
    where: { idUser: userId, idRecipe: meal.id }
  })

  meal.dataValues.favorite = (favorite) ? true : false

  return {status: "SUCCESS", message: meal}
}

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
  findById
}