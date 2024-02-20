import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorie, Recipe } from '@prisma/client';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private recipesRepository: RecipesRepository) {}

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
  ): Promise<Promise<Pick<Categorie, 'categoryName'>[]>> {
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
