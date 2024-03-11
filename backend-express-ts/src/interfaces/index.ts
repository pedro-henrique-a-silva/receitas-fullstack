import { Request } from 'express';

export type NewEntity<T> = Omit<T, 'id'>;

export type ID = number;

export type Identifiable = { id: ID };

export type UserJwtPayload = {
  user?: {
    id: number,
    username: string
  }
};

export type RequestWithUser = Request & UserJwtPayload;
