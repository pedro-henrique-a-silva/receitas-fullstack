import { Request, Response, Router } from 'express';
import FavoriteController from '../controllers/FavoriteController';
import { RequestWithUser } from '../interfaces';

const favoriteController = new FavoriteController();
const favoriteRouter = Router();

// favoriteRouter.use(authMiddleware.auth);

favoriteRouter.get(
  '/:id',
  (req: RequestWithUser, res: Response) => favoriteController.getFavorites(req, res),
);

favoriteRouter.post(
  '/:id',
  (req: RequestWithUser, res: Response) => favoriteController.updateFavorites(req, res),
);

export default favoriteRouter;