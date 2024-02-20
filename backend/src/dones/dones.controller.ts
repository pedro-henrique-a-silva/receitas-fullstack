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
import { DonesService } from './dones.service';
import { AuthGuard } from 'src/common/auth.guard';
import { RequestWithUserDataJWT } from 'src/Interfaces';

@Controller('dones')
export class DonesController {
  constructor(private doneService: DonesService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getDones(@Param('id') id: string) {
    const favorites = await this.doneService.getDones(Number(id));
    return favorites;
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Post(':id')
  async updateDones(
    @Body('recipeId') recipeId: string,
    @Param('id') userId: string,
    @Req()
    req: RequestWithUserDataJWT,
  ) {
    await this.doneService.updateDones(
      Number(recipeId),
      Number(userId),
      req.user.username,
    );
  }
}
