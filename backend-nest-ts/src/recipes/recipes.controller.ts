import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { JWTGuard } from '../common/jwt/jwt.guard';

@Controller('')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @UseGuards(JWTGuard)
  @Get(':recipeType')
  async getAll(@Param('recipeType') recipeType: string) {
    const recipes = await this.recipesService.findAll(recipeType);

    return recipes;
  }

  @UseGuards(JWTGuard)
  @Get(':recipeType/category')
  async getAllCategories(@Param('recipeType') recipeType: string) {
    const categories = await this.recipesService.findAllCategories(recipeType);

    return categories;
  }

  @UseGuards(JWTGuard)
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

  @UseGuards(JWTGuard)
  @Get(':recipeType/:id')
  async getById(
    @Param('recipeType') recipeType: string,
    @Param('id') id: string,
  ) {
    const recipe = await this.recipesService.findById(Number(id), recipeType);
    return recipe;
  }
}
