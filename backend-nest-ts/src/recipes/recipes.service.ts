import { Injectable, NotFoundException } from '@nestjs/common';
import { Category, Recipe } from '@prisma/client';
import { RecipeRepository } from './interface/RecipesRepository';
import { IRecipeWithCategoryName, IRecipeWithFavorite } from './interface/recipes.interface';
import FavoriteRepository from 'src/favorite/interface/FavoriteRepository';

@Injectable()
export class RecipesService {
  constructor(
    private recipesRepository: RecipeRepository,
    private favoriteRepository: FavoriteRepository,
  ) {}

  async findAll(recipeType: string): Promise<IRecipeWithCategoryName[]> {
    const recipes = await this.recipesRepository.findAll(recipeType);

    return recipes;
  }

  async findById(id: number, userId: number): Promise<IRecipeWithFavorite | null> {
    const recipe = await this.recipesRepository.findById(id);

    if (!recipe) throw new NotFoundException();

    const favorite = await this.favoriteRepository.getOneFavorite(recipe.id, userId);

    return { ...recipe, favorite: Boolean(favorite) }
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
  ): Promise<IRecipeWithCategoryName[]> {
    const recipesByCategory = await this.recipesRepository.findByCategory(
      recipeType,
      categoryName,
    );

    return recipesByCategory;
  }
}
