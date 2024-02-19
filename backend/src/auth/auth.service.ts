import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../repositories/users/users.service';
import { IUserLoginDTO } from 'src/Interfaces/users/IUsers';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async auth(loginData: IUserLoginDTO) {
    const user = await this.usersService.findOne(loginData);
    if (!user) throw new NotFoundException();

    return user;
  }
}
