import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUserRepositore } from './interfaces/IUserRepository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository implements IUserRepositore {
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
