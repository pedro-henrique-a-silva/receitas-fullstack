import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { AuthGuard } from '../common/auth.guard';

@Controller('')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @UseGuards(AuthGuard)
  @Get(':recipeType')
  async getAll(@Param('recipeType') recipeType: string) {
    const recipes = await this.recipesService.findAll(recipeType);

    return recipes;
  }

  @UseGuards(AuthGuard)
  @Get(':recipeType/category')
  async getAllCategories(@Param('recipeType') recipeType: string) {
    const categories = await this.recipesService.findAllCategories(recipeType);

    return categories;
  }

  @UseGuards(AuthGuard)
  @Get(':recipeType/category/:categoryName')
  async getAllByCategory(
    @Param('recipeType') recipeType: string,
    @Param('categoryName') categoryName: string,
  ) {
    const recipesByCategory = await this.recipesService.findByCategory(
      recipeType,
      categoryName,
    );

    return recipesByCategory;
  }

  @UseGuards(AuthGuard)
  @Get(':recipeType/:id')
  async getById(
    @Param('recipeType') recipeType: string,
    @Param('id') id: string,
  ) {
    const recipe = await this.recipesService.findById(Number(id), recipeType);
    return recipe;
  }
}
