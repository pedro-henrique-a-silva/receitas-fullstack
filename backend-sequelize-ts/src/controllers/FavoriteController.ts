import { Response } from 'express';
import mapStatusHTTP from '../utils/httpMap';
import FavoriteService from '../services/FavoriteService';
import { RequestWithUser } from '../interfaces';

export default class FavoriteController {
  constructor(
    private favoriteService: FavoriteService = new FavoriteService(),
  ) {}

  async getFavorites(req: RequestWithUser, res: Response) {
    // const id = req.user?.id;
    const { id } = req.params;

    const { status, data } = await this.favoriteService.getFavorites(Number(id));

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }

  async updateFavorites(req: RequestWithUser, res: Response) {
    const { recipeId } = req.body;
    const id = req.user?.id;
    const username = req.user?.username;

    const { status, data } = await this.favoriteService.updateFavorites(
      recipeId,
      (id as number),
      (username as string),
    );

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }
}
