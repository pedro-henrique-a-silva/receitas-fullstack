import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { FavoriteModule } from './favorite/favorite.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    FavoriteModule,
    AuthModule,
    RecipesModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1d', algorithm: 'HS256' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
