export interface IUser {
  id: number
  name: string;
  username: string;
  password: string;
}

export type CreateUser = Omit<IUser, 'id'>;