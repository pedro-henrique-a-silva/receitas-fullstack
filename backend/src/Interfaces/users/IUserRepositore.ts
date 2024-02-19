import { ICRUDModelCreator } from '../ICRUDModel';
import { IUserLoginDTO } from './IUsers';
import { User } from '@prisma/client';

export interface IUserRepositore extends ICRUDModelCreator<User> {
  findOne(loginData: IUserLoginDTO): Promise<User | null>;
  // signUp(signUpData: IUserLoginDTO): void;
}
