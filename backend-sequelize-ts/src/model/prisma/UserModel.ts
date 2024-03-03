import { PrismaClient } from '@prisma/client';
import IUserModel from '../../interfaces/user/IUserModel';
import { CreateUser } from '../../interfaces/user/IUser';

export default class UserModel implements IUserModel {
  constructor(private prisma = new PrismaClient()) {}

  async findByUsername(username: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }

  async create(signUpData: CreateUser) {
    const userCreate = this.prisma.user.create({
      data: signUpData,
    });

    return userCreate;
  }
}
