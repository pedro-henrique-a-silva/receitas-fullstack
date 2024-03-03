import { Identifiable } from '..';

export interface IUser extends Identifiable {
  name: string;
  username: string;
  password: string;
}

export type CreateUser = Omit<IUser, 'id'>;
