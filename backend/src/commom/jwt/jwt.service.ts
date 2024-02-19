import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
  private secret: Secret = process.env.JWT_SECRET || 'secret';

  private jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  verify(token: string): JwtPayload | string {
    try {
      return verify(token, this.secret) as JwtPayload;
    } catch (error) {
      return 'Token must be a valid token';
    }
  }
}
