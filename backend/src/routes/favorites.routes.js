const express = require('express');
const { favoritesController } = require('../controllers');
const { authMiddleware } = require('../middleware')
const favoriteRouter = express.Router();

favoriteRouter.get('/:id', favoritesController.getFavorites);

module.exports = favoriteRouter;