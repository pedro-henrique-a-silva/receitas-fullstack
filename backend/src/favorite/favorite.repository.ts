import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AllUserFavorites } from './interface/favorite.interface';
import { IFavoriteRepository } from './interface/IFavoriteRepository';

@Injectable()
export default class FavoriteRepository implements IFavoriteRepository {
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
}
