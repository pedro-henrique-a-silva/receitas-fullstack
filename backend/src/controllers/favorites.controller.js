const { favoritesService } = require('../services')
const httpMap = require('../utils/httpMap')

const getFavorites = async (req, res) => {
  const { id } = req.params;
  const favorites = await favoritesService.getFavorites(id);

  return res.status(httpMap[favorites.status]).json(favorites.message)
}

module.exports = {
  getFavorites,
}