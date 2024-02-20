import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.repository';
import { IUserCreateDTO, IUserLoginDTO } from './interfaces/auth.interface';
import { JwtService } from '../commom/jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async auth(loginData: IUserLoginDTO) {
    const user = await this.usersService.findOne(loginData);
    if (!user) throw new NotFoundException();

    const token = this.jwtService.sign({
      name: user.name,
      username: user.username,
    });
    return { token };
  }

  async signUp(signUpData: IUserCreateDTO) {
    const user = await this.usersService.findOne({
      username: signUpData.username,
    });

    if (user) throw new ConflictException();

    const userCreated = await this.usersService.create(signUpData);

    return userCreated;
  }
}
