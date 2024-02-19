import jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { ITokenPayload } from '../../Interfaces/JWT/ITokenPayload';

@Injectable()
export class JwtService {
  private secret = process.env.JWT_SECRET || 'secret';

  sign(payload: ITokenPayload): string {
    const token = jwt.sign(payload, this.secret);
    return token;
  }

  verify(token: string): ITokenPayload {
    const data = jwt.verify(token, this.secret) as ITokenPayload;
    return data;
  }
}
