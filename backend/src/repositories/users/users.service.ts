import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IUserRepositore } from '../../Interfaces/users/IUserRepositore';
import { IUserCreateDTO, IUserLoginDTO } from '../../Interfaces/users/IUsers';

@Injectable()
export class UsersService implements IUserRepositore {
  constructor(private prisma: PrismaService) {}

  async findOne(loginData: IUserLoginDTO) {
    const user = await this.prisma.user.findFirst({
      where: loginData,
    });

    return user;
  }

  async create(signUpData: IUserCreateDTO) {
    const userCreate = this.prisma.user.create({
      data: signUpData,
    });

    return userCreate;
  }
}
