import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/httpMap';

export default class UserController {
  constructor(
    private userService: UserService = new UserService(),
  ) {}

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    const { status, data } = await this.userService.findByUsername(username, password);

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }

  async signup(req: Request, res: Response) {
    const { name, username, password } = req.body;

    const { status, data } = await this.userService.create({ name, username, password });

    const statusCode = mapStatusHTTP(status);

    return res.status(statusCode).json(data);
  }
}
