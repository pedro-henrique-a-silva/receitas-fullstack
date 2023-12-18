const express = require('express');
const { favoritesController } = require('../controllers');
const { authMiddleware } = require('../middleware')
const favoriteRouter = express.Router();

favoriteRouter.use(authMiddleware.auth)

favoriteRouter.get('/', favoritesController.getFavorites);
favoriteRouter.post('/', favoritesController.updateFavorites);

module.exports = favoriteRouter;