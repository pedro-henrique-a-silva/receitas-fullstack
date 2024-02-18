import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async auth(username: string, password: string) {
    const user = await this.usersService.findOne(username, password);
    if (!user) throw new NotFoundException();

    return user;
  }
}
