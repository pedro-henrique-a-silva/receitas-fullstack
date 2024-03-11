import { Response } from 'express';

import mapStatusHTTP from '../utils/httpMap';
import { RequestWithUser } from '../interfaces';
import DoneService from '../services/DoneService';

export default class DoneController {
  constructor(
    private donesService: DoneService = new DoneService(),
  ) {}

  async getDones(req: RequestWithUser, res: Response) {
    const id = req.user?.id;
    const { status, data } = await this.donesService.getDones(Number(id));

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }

  async updateDones(req: RequestWithUser, res: Response) {
    const { recipeId } = req.body;
    const id = req.user?.id;
    const username = req.user?.username;
    const { status, data } = await this.donesService.updateDones(
      recipeId,
      (id as number),
      (username as string),
    );

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }
}
