const { User, Recipe, Favorite } = require('../models') 

const getFavorites = async (userId) => {
  const favorites = await User.findOne({
    attributes: ['id', 'name', 'username'],
    include: [
      { model: Recipe, through: { attributes: [] }, as: 'recipes' }
    ],
    where: {id: userId}
  })

  return {status: "SUCCESS", message: favorites}
}

const updateFavorites = async (recipeId, userId) => {
  const favorite = await Favorite.findOne({
    where: {idUser: userId, idRecipe: recipeId}
  })

  if (favorite) {
    const favoriteRemoved = Favorite.destroy({
      where: {idUser: userId, idRecipe: recipeId}
    })

    return {status: "SUCCESS", message: "favorite removed"}
  }

  const favoriteCreated = Favorite.create({idUser: userId, idRecipe: recipeId})

  return {status: "CREATED", message: "favorite created"}
}

module.exports = {
  getFavorites,
  updateFavorites
}