import { Response, Router } from 'express';
import DoneController from '../controllers/DoneController';
import { RequestWithUser } from '../interfaces';

const donesController = new DoneController();
const donesRouter = Router();

donesRouter.get(
  '/:id',
  (req: RequestWithUser, res: Response) => donesController.getDones(req, res),
);

donesRouter.post(
  '/',
  (req: RequestWithUser, res: Response) => donesController.updateDones(req, res),
);

export default donesRouter;
