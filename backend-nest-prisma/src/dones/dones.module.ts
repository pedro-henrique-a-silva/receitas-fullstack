import { Module } from '@nestjs/common';
import { DonesService } from './dones.service';
import { DonesController } from './dones.controller';
import PrismaModule from '../prisma/prisma.module';
import CommonModule from '../common/common.module';
import { UsersModule } from '../users/users.module';
import DonesRepository from './dones.repository';
import PrismaDonesRepository from './dones.repository';

@Module({
  imports: [PrismaModule, CommonModule, UsersModule],
  providers: [
    DonesService,
    { provide: DonesRepository, useClass: PrismaDonesRepository },
  ],
  controllers: [DonesController],
})
export class DonesModule {}
