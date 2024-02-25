import { Injectable } from '@nestjs/common';
import UserRepository from './interfaces/UserRepository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async findByUsername(username: string) {
    const user = await this.userRepository.findByUsername(username);

    return user;
  }

  async create(signUpData: Prisma.UserCreateInput) {
    const created = await this.userRepository.create(signUpData);

    return created;
  }
}
