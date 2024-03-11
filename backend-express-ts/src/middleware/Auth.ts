import { Response, NextFunction } from 'express';
import JWT from '../utils/JWT';
import { RequestWithUser } from '../interfaces';

export default class Auth {
  static auth(req: RequestWithUser, res: Response, next: NextFunction) {
    const authBearer = req.header('Authorization');

    if (!authBearer) {
      return res.status(401).json({ message: 'token not found' });
    }

    const token = authBearer.split(' ')[1];

    const tokenDecoded = JWT.verify(token);
    if (tokenDecoded === 'Token must be a valid token') {
      return res.status(401).json({ message: tokenDecoded });
    }

    req.user = tokenDecoded as never as { id: number, username:string };

    next();
  }
}
