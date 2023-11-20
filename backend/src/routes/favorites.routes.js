const express = require('express');
const {favoritesModel} = require('../models/index')
const favoritesRouter = express.Router();


favoritesRouter.get('/:username', async (req, res) => {
  const {username} = req.params;
  const allFavorites = await favoritesModel.getAll(username);

  return res.status(200).json(allFavorites);
});

module.exports = favoritesRouter;