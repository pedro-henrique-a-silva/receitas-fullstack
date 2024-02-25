import { Module } from '@nestjs/common';
import { JWTGuard } from './jwt/jwt.guard';
import { BCryptHashService } from './hash/hash.service';
import HashService from './hash/hash.interface';

@Module({
  providers: [JWTGuard, { provide: HashService, useClass: BCryptHashService }],
  exports: [JWTGuard, { provide: HashService, useClass: BCryptHashService }],
})
export default class CommonModule {}
