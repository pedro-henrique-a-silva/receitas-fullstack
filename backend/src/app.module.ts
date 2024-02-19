import { Module } from '@nestjs/common';
import UsersModule from './repositories/users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './commom/jwt/jwt.module';

@Module({
  imports: [UsersModule, AuthModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
