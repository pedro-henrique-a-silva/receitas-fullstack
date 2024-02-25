import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto, SignUpDTO } from './auth.dto';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AuthLoginDto) {
    const user = await this.authService.auth(body);
    return user;
  }

  @Post('signup')
  async signUp(@Body() body: SignUpDTO) {
    const userCreated = await this.authService.signUp(body);
    return userCreated;
  }
}
