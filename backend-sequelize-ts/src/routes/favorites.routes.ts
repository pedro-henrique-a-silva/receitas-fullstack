import { Response, Router } from 'express';
import FavoriteController from '../controllers/FavoriteController';
import { RequestWithUser } from '../interfaces';
import Auth from '../middleware/Auth';

const favoriteController = new FavoriteController();
const favoriteRouter = Router();

favoriteRouter.get(
  '/',
  Auth.auth,
  (req: RequestWithUser, res: Response) => favoriteController.getFavorites(req, res),
);

favoriteRouter.post(
  '/',
  Auth.auth,
  (req: RequestWithUser, res: Response) => favoriteController.updateFavorites(req, res),
);

export default favoriteRouter;
