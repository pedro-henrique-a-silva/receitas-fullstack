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

module.exports = {
  getFavorites
}