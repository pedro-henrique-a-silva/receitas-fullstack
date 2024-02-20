import { PrismaService } from '../prisma/prisma.service';
import { IUserRepositore } from './interfaces/IUserRepositore';
import { Prisma } from '@prisma/client';

export class UsersService implements IUserRepositore {
  constructor(private prisma: PrismaService) {}

  async findOne(searchData: Prisma.UserWhereInput) {
    const user = await this.prisma.user.findFirst({
      where: searchData,
    });

    return user;
  }

  async create(signUpData: Prisma.UserCreateInput) {
    const userCreate = this.prisma.user.create({
      data: signUpData,
    });

    return userCreate;
  }
}
