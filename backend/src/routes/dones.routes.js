const express = require('express');
const { donesController } = require('../controllers');
const { authMiddleware } = require('../middleware')
const donesRouter = express.Router();

donesRouter.use(authMiddleware.auth)

donesRouter.get('/', donesController.getDones);
donesRouter.post('/', donesController.updateDones);

module.exports = donesRouter;