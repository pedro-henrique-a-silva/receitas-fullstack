const { donesService } = require('../services')
const httpMap = require('../utils/httpMap')

const getDones = async (req, res) => {
  const { id } = req.user;
  const dones = await donesService.getDones(id);

  return res.status(httpMap[dones.status]).json(dones.message)
}

const updateDones = async (req, res) => {
  const { recipeId } = req.body;
  const { id } = req.user;
  const done = await donesService.updateDones(recipeId, id);

  return res.status(httpMap[done.status]).json(done.message)
}

module.exports = {
  getDones,
  updateDones,
}