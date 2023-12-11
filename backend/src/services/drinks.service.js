const { Recipe, Category, Favorite } = require('../models')

const getAll = async () => {
  const allDrinks = await Recipe.findAll({
    where: {recipeType: 'drink'}, 
    order: [['str_name', 'ASC']]
  })

  return { status: "SUCCESS", message: allDrinks }
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

const findById = async (drinkId, userId) => {
  const drink = await Recipe.findByPk(drinkId, {
    include: { 
      model: Category,
      as: 'category', 
      attributes: [ 'categoryName']
    },
  })

  const favorite = await Favorite.findOne({
    where: {idUser: userId, idRecipe: drink.id}
  })

  drink.dataValues.favorite = (favorite) ? true : false

  return {status: 'SUCCESS', message: drink}
}

module.exports = {
  getAll,
  getAllCategories,
  findByCategory,
  findById
}