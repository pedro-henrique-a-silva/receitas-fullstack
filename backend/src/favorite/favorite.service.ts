import { Injectable } from '@nestjs/common';
import FavoriteRepository from './favorite.repository';
import { AllUserFavorites } from './interface/favorite.interface';

@Injectable()
export class FavoriteService {
  constructor(private favoriteRepository: FavoriteRepository) {}

  async getFavorites(id: number): Promise<AllUserFavorites | null> {
    const favorites = this.favoriteRepository.getFavorites(id);
    return favorites;
  }
}
