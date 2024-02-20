import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { AuthGuard } from 'src/common/auth.guard';
import { RequestWithUserDataJWT } from '../Interfaces';

@Controller('favorites')
export class FavoriteController {
  constructor(private favoriteService: FavoriteService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getFavorites(@Param('id') id: string) {
    const favorites = await this.favoriteService.getFavorites(Number(id));
    return favorites;
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Post(':id')
  async updateFavorite(
    @Body('recipeId') recipeId: string,
    @Param('id') userId: string,
    @Req()
    req: RequestWithUserDataJWT,
  ) {
    await this.favoriteService.updateFavorites(
      Number(recipeId),
      Number(userId),
      req.user.username,
    );
  }
}
