import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: Omit<User, 'id' | 'name'>) {
    const user = await this.authService.auth(body.username, body.password);
    return user;
  }
}
