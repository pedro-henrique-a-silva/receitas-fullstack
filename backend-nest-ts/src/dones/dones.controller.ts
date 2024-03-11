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
import { DonesService } from './dones.service';
import { JWTGuard } from '../common/jwt/jwt.guard';
import { RequestWithUser } from 'src/Interfaces';
import { IUser } from 'src/users/interfaces/user.interface';

@Controller('dones')
export class DonesController {
  constructor(private doneService: DonesService) {}

  @UseGuards(JWTGuard)
  @Get('')
  async getDones(@Req() req: RequestWithUser) {
    const { user } = req
    console.log(user)
    const dones = await this.doneService.getDones(Number(user?.id));
    return dones;
  }

  @UseGuards(JWTGuard)
  @HttpCode(200)
  @Post('')
  async updateDones(
    @Body('recipeId') recipeId: string,
    @Param('id') userId: string,
    @Req()
    req: RequestWithUser,
  ) {
    const { user } = req
    const dones = await this.doneService.updateDones(
      Number(recipeId),
      Number(user?.id),
      user?.username  as string,
    );

    return dones
  }
}
