import { ICRUDModelCreator } from '../../Interfaces/ICRUDModel';
import { Prisma, User } from '@prisma/client';

export interface IUserRepositore
  extends ICRUDModelCreator<Prisma.UserCreateInput> {
  findOne(searchData: Prisma.UserWhereInput): Promise<User | null>;
}
