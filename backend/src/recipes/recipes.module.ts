import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { MealsModule } from 'src/repositories/meals/meals.module';
import { DrinksModule } from 'src/repositories/drinks/drinks.module';

@Module({
  imports: [MealsModule, DrinksModule],
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
