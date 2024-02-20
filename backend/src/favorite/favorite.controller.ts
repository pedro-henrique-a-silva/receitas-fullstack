import { Controller, Get, Param } from '@nestjs/common';
import { FavoriteService } from './favorite.service';

@Controller('favorites')
export class FavoriteController {
  constructor(private favoriteService: FavoriteService) {}

  @Get(':id')
  async getFavorites(@Param('id') id: string) {
    const favorites = await this.favoriteService.getFavorites(Number(id));
    return favorites;
  }
}
