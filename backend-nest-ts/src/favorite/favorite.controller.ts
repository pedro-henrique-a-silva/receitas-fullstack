import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { JWTGuard } from '../common/jwt/jwt.guard';
import { RequestWithUser } from '../Interfaces';
import { IUserCreateDTO } from 'src/auth/interfaces/auth.interface';
import { IUser } from 'src/users/interfaces/user.interface';

@Controller('favorites')
export class FavoriteController {
  constructor(private favoriteService: FavoriteService) {}

  @UseGuards(JWTGuard)
  @Get('')
  async getFavorites(@Request() req: RequestWithUser) {
    const { user } = req
    console.log(user)
    const favorites = await this.favoriteService.getFavorites(Number(user?.id));
    return favorites;
  }

  @UseGuards(JWTGuard)
  @HttpCode(200)
  @Post('')
  async updateFavorite(
    @Body('recipeId') recipeId: string,
    @Req() req: RequestWithUser,
  ) {
    const { user } = req
    const favorite = await this.favoriteService.updateFavorites(
      Number(recipeId),
      Number(user?.id),
      user?.username as string,
    );

    return favorite
  }
}
