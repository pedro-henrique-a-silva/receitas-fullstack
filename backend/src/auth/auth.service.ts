import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { IUserCreateDTO, IUserLoginDTO } from './interfaces/auth.interface';
import { JwtService } from '../commom/jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async auth(loginData: IUserLoginDTO) {
    const user = await this.usersRepository.findOne(loginData);
    if (!user) throw new NotFoundException();

    const token = this.jwtService.sign({
      name: user.name,
      username: user.username,
    });
    return { token };
  }

  async signUp(signUpData: IUserCreateDTO) {
    const user = await this.usersRepository.findOne({
      username: signUpData.username,
    });

    if (user) throw new ConflictException();

    const userCreated = await this.usersRepository.create(signUpData);

    return userCreated;
  }
}
