import { Injectable, NotFoundException } from '@nestjs/common';
import { Category, Recipe } from '@prisma/client';
import { RecipeRepository } from './interface/RecipesRepository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepository: RecipeRepository) {}

  async findAll(recipeType: string): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findAll(recipeType);

    return recipes;
  }

  async findById(id: number, recipeType: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findById(id, recipeType);

    if (!recipe) throw new NotFoundException();

    return recipe;
  }

  async findAllCategories(
    recipeType: string,
  ): Promise<Promise<Pick<Category, 'categoryName'>[]>> {
    const categories =
      await this.recipesRepository.findAllCategories(recipeType);

    return categories;
  }

  async findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<Recipe[]> {
    const recipesByCategory = await this.recipesRepository.findByCategory(
      recipeType,
      categoryName,
    );

    return recipesByCategory;
  }
}
