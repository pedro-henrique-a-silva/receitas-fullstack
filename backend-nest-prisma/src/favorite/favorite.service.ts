import { Injectable, UnauthorizedException } from '@nestjs/common';
import FavoriteRepository from './favorite.repository';
import { AllUserFavorites } from './interface/favorite.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class FavoriteService {
  constructor(
    private favoriteRepository: FavoriteRepository,
    private userService: UsersService,
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
    const user = await this.userService.findByUsername(username);

    if (!user || user.id !== userId) throw new UnauthorizedException();

    await this.favoriteRepository.updateFavorites(recipeId, userId);
  }
}
