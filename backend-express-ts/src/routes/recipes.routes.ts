import { Request, Response, Router } from 'express';
import RecipeController from '../controllers/RecipeController';
import Auth from '../middleware/Auth';

const recipesRouter = Router();

const recipeController = new RecipeController();

recipesRouter.get(
  '/:recipeType',
  Auth.auth,
  (req: Request, res: Response) => recipeController.getAll(req, res),
);

recipesRouter.get(
  '/:recipeType/category',
  Auth.auth,
  (req: Request, res: Response) => recipeController.getAllCategories(req, res),
);

recipesRouter.get(
  '/:recipeType/category/:categoryName',
  Auth.auth,
  (req: Request, res: Response) => recipeController.getAllByCategory(req, res),
);

recipesRouter.get(
  '/:recipeType/:recipeId',
  Auth.auth,
  (req: Request, res: Response) => recipeController.getById(req, res),
);

export default recipesRouter;
