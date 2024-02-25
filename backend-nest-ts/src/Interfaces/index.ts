import { Request } from 'express';

export type NewEntity<T> = Omit<T, 'id'>;

export type ID = number;

export type Identifiable = { id: ID };

export interface RequestWithUserDataJWT extends Request {
  user: {
    name: string;
    username: string;
    iat: number;
    exp: number;
  };
}
