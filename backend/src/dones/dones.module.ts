import { Module } from '@nestjs/common';
import { DonesService } from './dones.service';
import DonesRepository from './dones.repository';
import { DonesController } from './dones.controller';
import { AuthModule } from '../auth/auth.module';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/auth.module';

@Module({
  imports: [PrismaModule, CommonModule, AuthModule],
  providers: [DonesService, DonesRepository],
  controllers: [DonesController],
})
export class DonesModule {}
