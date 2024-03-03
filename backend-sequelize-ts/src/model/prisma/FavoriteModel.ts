import { PrismaClient } from '@prisma/client';
import IFavoriteModel from '../../interfaces/favorite/IFavoriteModel';
import { AllUserFavorites, IFavorite } from '../../interfaces/favorite/IFavorite';

export default class FavoriteModel implements IFavoriteModel {
  constructor(
    private prisma = new PrismaClient(),
  ) {}

  async getFavorites(id: number): Promise<any> {
    const favorites = await this.prisma.user.findUnique({
      select: {
        name: true,
        username: true,
        favoriteRecipes: {
          select: { recipe: true },
        },
      },
      where: { id },
    });

    return favorites;
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
