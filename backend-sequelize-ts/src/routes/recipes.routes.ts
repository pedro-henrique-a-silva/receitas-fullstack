import { Request, Response, Router } from 'express';
import RecipeController from '../controllers/RecipeController';

const recipesRouter = Router();

const recipeController = new RecipeController();

// mealsRouter.use(authMiddleware.auth);
recipesRouter.get(
  '/:recipeType',
  (req: Request, res: Response) => recipeController.getAll(req, res),
);

recipesRouter.get(
  '/:recipeType/category',
  (req: Request, res: Response) => recipeController.getAllCategories(req, res),
);

recipesRouter.get(
  '/:recipeType/category/:categoryName',
  (req: Request, res: Response) => recipeController.getAllByCategory(req, res),
);

recipesRouter.get(
  '/:recipeType/:id',
  (req: Request, res: Response) => recipeController.getById(req, res),
);

export default recipesRouter;
