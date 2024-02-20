import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '../commom/jwt/jwt.module';
import { UsersRepository } from './users.repository';
import PrismaModule from '../prisma/prisma.module';

@Module({
  imports: [JwtModule, PrismaModule],
  providers: [AuthService, UsersRepository],
  controllers: [AuthController],
})
export class AuthModule {}
