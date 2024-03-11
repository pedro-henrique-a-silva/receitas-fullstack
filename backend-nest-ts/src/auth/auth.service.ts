import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { IUserCreateDTO, IUserLoginDTO } from './interfaces/auth.interface';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import HashService from '../common/hash/hash.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private bCryptService: HashService,
  ) {}

  async auth(loginData: IUserLoginDTO) {
    const user = await this.userService.findByUsername(loginData.username);

    if (!user) throw new BadRequestException();

    const isPasswordMatch = await this.bCryptService.compare(
      loginData.password,
      user.password,
    );
    if (!isPasswordMatch) throw new BadRequestException();

    const token = await this.jwtService.signAsync({
      id: user.id,
      username: user.username,
    });

    return { token };
  }

  async signUp(signUpData: IUserCreateDTO) {
    const user = await this.userService.findByUsername(signUpData.username);
    if (user) throw new ConflictException();

    const userCreated = await this.userService.create({
      name: signUpData.name,
      username: signUpData.username,
      password: await this.bCryptService.hash(signUpData.password),
    });

    return userCreated;
  }
}
