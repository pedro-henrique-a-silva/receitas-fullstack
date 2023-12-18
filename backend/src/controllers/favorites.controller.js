const { favoritesService } = require('../services')
const httpMap = require('../utils/httpMap')

const getFavorites = async (req, res) => {
  const { id } = req.user;
  const favorites = await favoritesService.getFavorites(id);

  return res.status(httpMap[favorites.status]).json(favorites.message)
}

const updateFavorites = async (req, res) => {
  const { recipeId } = req.body;
  const { id } = req.user;
  const favorites = await favoritesService.updateFavorites(recipeId, id);

  return res.status(httpMap[favorites.status]).json(favorites.message)
}

module.exports = {
  getFavorites,
  updateFavorites,
}