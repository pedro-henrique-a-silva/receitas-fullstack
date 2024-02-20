import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get(':recipeType')
  async getAll(@Param('recipeType') recipeType: string) {
    const recipes = await this.recipesService.findAll(recipeType);

    return recipes;
  }

  @Get(':recipeType/:id')
  async getById(
    @Param('recipeType') recipeType: string,
    @Param('id') id: string,
  ) {
    const recipe = await this.recipesService.findById(Number(id), recipeType);
    return recipe;
  }
}
