import { Module } from '@nestjs/common';
import FavoriteRepository from './favorite.repository';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/common.module';
import { UsersModule } from '../users/users.module';
import PrismaFavoriteRepository from './favorite.repository';

@Module({
  imports: [PrismaModule, CommonModule, UsersModule],
  providers: [
    FavoriteService,
    { provide: FavoriteRepository, useClass: PrismaFavoriteRepository },
  ],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
