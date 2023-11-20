const express = require('express');
const {favoritesModel} = require('../models/index')
const favoritesRouter = express.Router();


favoritesRouter.get('/:userId', async (req, res) => {
  const {userId} = req.params;
  const allFavorites = await favoritesModel.getAll(userId);

  return res.status(200).json(allFavorites);
});

module.exports = favoritesRouter;