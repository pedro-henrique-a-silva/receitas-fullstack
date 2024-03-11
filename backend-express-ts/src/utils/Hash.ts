import * as bcrypt from 'bcrypt';
import HashService from '../interfaces/IHash';

export default class BCryptHashService implements HashService {
  private hashLib = bcrypt;

  async hash(value: string): Promise<string> {
    const hash = await this.hashLib.hash(value, 10);

    return hash;
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isPasswordMatch = await this.hashLib.compare(value, hash);

    return isPasswordMatch;
  }
}
