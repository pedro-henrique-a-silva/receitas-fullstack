import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '../commom/jwt/jwt.module';

@Module({
  imports: [JwtModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
