import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AllUserFavorites } from './interface/favorite.interface';

@Injectable()
export default class FavoriteRepository {
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
