import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();
const userRouter = Router();

userRouter.post(
  '/login',
  (req: Request, res: Response) => userController.login(req, res),
);

userRouter.post(
  '/signup',
  (req: Request, res: Response) => userController.signup(req, res),
);

export default userRouter;
