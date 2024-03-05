import { Response, Router } from 'express';
import DoneController from '../controllers/DoneController';
import { RequestWithUser } from '../interfaces';
import Auth from '../middleware/Auth';

const donesController = new DoneController();

const donesRouter = Router();

donesRouter.get(
  '/',
  Auth.auth,
  (req: RequestWithUser, res: Response) => donesController.getDones(req, res),
);

donesRouter.post(
  '/',
  Auth.auth,
  (req: RequestWithUser, res: Response) => donesController.updateDones(req, res),
);

export default donesRouter;
