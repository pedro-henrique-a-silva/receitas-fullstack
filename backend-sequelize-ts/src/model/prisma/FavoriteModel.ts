import { PrismaClient } from '@prisma/client';
import IFavoriteModel from '../../interfaces/favorite/IFavoriteModel';
import {
  AllUserFavorites,
  FavoritesFromDB,
  IFavorite,
  RecipeList,
} from '../../interfaces/favorite/IFavorite';
import getFavoritesQuerie from './queries/getFavoritesQuerie';

export default class FavoriteModel implements IFavoriteModel {
  constructor(
    private prisma = new PrismaClient(),
  ) {}

  async getFavorites(id: number): Promise<AllUserFavorites> {
    const favorites = await this.prisma.user.findUnique(getFavoritesQuerie(id));

    const { favoriteRecipes, ...restFavorites } = favorites as never as FavoritesFromDB;

    const favoritesRecipesList = favoriteRecipes
      .map((recipe: RecipeList) => {
        const { categoryId, category, ...restRecipe } = recipe.recipe;

        return { ...restRecipe, categoryName: category.categoryName };
      });

    return { ...restFavorites, favoriteRecipes: favoritesRecipesList };
  }

  async updateFavorites(recipeId: number, userId: number): Promise<void> {
    const favorite = await this.prisma.favoriteRecipes.findFirst({
      where: { recipeId, userId },
    });

    if (favorite) {
      await this.prisma.favoriteRecipes.deleteMany({
        where: { recipeId, userId },
      });
      return;
    }

    await this.prisma.favoriteRecipes.create({
      data: {
        userId,
        recipeId,
      },
    });
  }

  async getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null> {
    const favorite = this.prisma.favoriteRecipes.findFirst({
      where: { userId, recipeId },
    });

    return favorite;
  }
}
