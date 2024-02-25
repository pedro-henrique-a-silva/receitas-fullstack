import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AllUserFavorites } from './interface/favorite.interface';
import FavoriteRepository from './interface/FavoriteRepository';

@Injectable()
export default class PrismaFavoriteRepository implements FavoriteRepository {
  constructor(private prisma: PrismaService) {}

  async getFavorites(id: number): Promise<AllUserFavorites | null> {
    const favorites = await this.prisma.user.findUnique({
      select: {
        name: true,
        username: true,
        FavoriteRecipes: {
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
      await this.prisma.favoriteRecipes.delete({
        where: {
          userId_recipeId: {
            userId,
            recipeId,
          },
        },
      });
      return;
    }

    await this.prisma.favoriteRecipes.create({
      data: {
        userId,
        recipeId,
      },
    });

    return;
  }
}
