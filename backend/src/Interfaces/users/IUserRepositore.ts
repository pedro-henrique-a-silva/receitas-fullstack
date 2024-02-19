import { ICRUDModelCreator } from '../ICRUDModel';
import { Prisma, User } from '@prisma/client';

export interface IUserRepositore
  extends ICRUDModelCreator<Prisma.UserCreateInput> {
  findOne(searchData: Prisma.UserWhereInput): Promise<User | null>;
  // create(signUpData: Prisma.UserCreateInput): Promise<User | null>;
}
