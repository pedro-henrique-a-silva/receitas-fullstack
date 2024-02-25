import { Injectable } from '@nestjs/common';
import HashService from './hash.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BCryptHashService implements HashService {
  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, 10);

    return hash;
  }
  async compare(value: string, hash: string): Promise<boolean> {
    const isPasswordMatch = await bcrypt.compare(value, hash);

    return isPasswordMatch;
  }
}
