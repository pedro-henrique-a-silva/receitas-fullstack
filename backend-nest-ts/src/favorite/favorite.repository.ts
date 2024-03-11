import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AllUserFavorites, FavoritesFromDB, IFavorite, RecipeList } from './interface/favorite.interface';
import FavoriteRepository from './interface/FavoriteRepository';
import getFavoritesQuerie from './queries/getFavoritesQuerie';

@Injectable()
export default class PrismaFavoriteRepository implements FavoriteRepository {
  constructor(private prisma: PrismaService) {}

  async getFavorites(id: number): Promise<AllUserFavorites | null> {
    const favorites = await this.prisma.user.findUnique(getFavoritesQuerie(id));

    const { favoriteRecipes, ...restFavorites } = favorites as never as FavoritesFromDB;

    const recipesList = favoriteRecipes.map((recipe: RecipeList) => {
      const { categoryId, category, ...restRecipe } = recipe.recipe;

      return { ...restRecipe, categoryName: category.categoryName };
    });

    return {
      ...restFavorites,
     favoriteRecipes: recipesList
    };
  }

  async updateFavorites(recipeId: number, userId: number): Promise<boolean> {
    const favorite = await this.prisma.favoriteRecipes.findFirst({
      where: { recipeId, userId },
    });

    if (favorite) {
      await this.prisma.favoriteRecipes.delete({
        where: {
          userId_recipeId: {
            userId,
            recipeId,
          },
        },
      });
      return false;
    }

    await this.prisma.favoriteRecipes.create({
      data: {
        userId,
        recipeId,
      },
    });

    return true;
  }

  async getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null> {
    const favorite = this.prisma.favoriteRecipes.findFirst({
      where: { userId, recipeId },
    });

    return favorite;
  }
}
