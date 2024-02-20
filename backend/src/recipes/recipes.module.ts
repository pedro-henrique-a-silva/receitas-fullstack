import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { RecipesRepository } from './recipes.repository';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/auth.module';

@Module({
  imports: [PrismaModule, CommonModule],
  providers: [RecipesService, RecipesRepository],
  controllers: [RecipesController],
})
export class RecipesModule {}
