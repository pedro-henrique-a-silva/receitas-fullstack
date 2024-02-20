import { Injectable, UnauthorizedException } from '@nestjs/common';
import FavoriteRepository from './favorite.repository';
import { AllUserFavorites } from './interface/favorite.interface';
import { UsersRepository } from '../auth/users.repository';

@Injectable()
export class FavoriteService {
  constructor(
    private favoriteRepository: FavoriteRepository,
    private userRepository: UsersRepository,
  ) {}

  async getFavorites(id: number): Promise<AllUserFavorites | null> {
    const favorites = this.favoriteRepository.getFavorites(id);
    return favorites;
  }

  async updateFavorites(
    recipeId: number,
    userId: number,
    username: string,
  ): Promise<void> {
    const user = await this.userRepository.findOne({ username });

    if (!user || user.id !== userId) throw new UnauthorizedException();

    await this.favoriteRepository.updateFavorites(recipeId, userId);
  }
}
