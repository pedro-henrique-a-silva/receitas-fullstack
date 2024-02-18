import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });

    return user;
  }
}
