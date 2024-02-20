import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [FavoriteModule, AuthModule, RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
