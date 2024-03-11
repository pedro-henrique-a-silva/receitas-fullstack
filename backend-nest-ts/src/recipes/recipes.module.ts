import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/common.module';
import { RecipeRepository } from './interface/RecipesRepository';
import { PrismaRecipesRepository } from './recipes.repository';
import { FavoriteModule } from '../favorite/favorite.module';
import FavoriteRepository from '../favorite/interface/FavoriteRepository';
import PrismaFavoriteRepository from '../favorite/favorite.repository';

@Module({
  imports: [
    PrismaModule, 
    CommonModule, 
    FavoriteModule
  ],
  providers: [
    RecipesService,
    { provide: RecipeRepository, useClass: PrismaRecipesRepository },
    { provide: FavoriteRepository, useClass: PrismaFavoriteRepository },
  ],
  controllers: [RecipesController],
})
export class RecipesModule {}
