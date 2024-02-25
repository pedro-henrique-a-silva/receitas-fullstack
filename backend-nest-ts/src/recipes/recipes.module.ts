import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/common.module';
import { RecipeRepository } from './interface/RecipesRepository';
import { PrismaRecipesRepository } from './recipes.repository';

@Module({
  imports: [PrismaModule, CommonModule],
  providers: [
    RecipesService,
    { provide: RecipeRepository, useClass: PrismaRecipesRepository },
  ],
  controllers: [RecipesController],
})
export class RecipesModule {}
