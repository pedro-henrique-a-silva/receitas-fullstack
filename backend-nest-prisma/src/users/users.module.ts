import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import UsersRepository from './interfaces/UserRepository';
import PrismaModule from '../prisma/prisma.module';
import { PrismaUsersRepository } from './users.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    UsersService,
    { provide: UsersRepository, useClass: PrismaUsersRepository },
  ],
  exports: [UsersService],
})
export class UsersModule {}
