import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersRepository } from './users.repository';
import PrismaModule from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AuthService, UsersRepository],
  controllers: [AuthController],
  exports: [UsersRepository],
})
export class AuthModule {}
