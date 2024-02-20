import { Module } from '@nestjs/common';
import FavoriteRepository from './favorite.repository';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/auth.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, CommonModule, AuthModule],
  providers: [FavoriteRepository, FavoriteService],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
