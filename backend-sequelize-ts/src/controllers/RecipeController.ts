import { Request, Response } from 'express';
import RecipesService from '../services/RecipeService';
import mapStatusHTTP from '../utils/httpMap';

export default class RecipeController {
  constructor(private recipesService: RecipesService = new RecipesService()) { }

  async getAll(req: Request, res: Response) {
    const { recipeType } = req.params;
    const { status, data } = await this.recipesService.findAll(recipeType);

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }

  async getAllCategories(req: Request, res: Response) {
    const { recipeType } = req.params;
    const { status, data } = await this.recipesService.findAllCategories(recipeType);

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }

  async getAllByCategory(req: Request, res: Response) {
    const { recipeType, categoryName } = req.params;

    const { status, data } = await this.recipesService.findByCategory(recipeType, categoryName);

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const { status, data } = await this.recipesService.findById(Number(id));

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }
}
