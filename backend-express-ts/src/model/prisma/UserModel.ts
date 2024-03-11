import { PrismaClient } from '@prisma/client';
import IUserModel from '../../interfaces/user/IUserModel';
import { CreateUser, IUser } from '../../interfaces/user/IUser';

export default class UserModel implements IUserModel {
  constructor(private prisma = new PrismaClient()) {}

  async findByUsername(username: string): Promise<IUser | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }

  async create(signUpData: CreateUser): Promise<IUser> {
    const userCreate = this.prisma.user.create({
      data: signUpData,
    });

    return userCreate;
  }
}
