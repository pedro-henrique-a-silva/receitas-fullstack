import { Module } from '@nestjs/common';
import FavoriteRepository from './favorite.repository';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import PrismaModule from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FavoriteRepository, FavoriteService],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
