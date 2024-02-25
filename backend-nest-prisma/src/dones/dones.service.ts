import { Injectable, UnauthorizedException } from '@nestjs/common';
import DonesRepository from './dones.repository';
import { AllUserDones } from './interfaces/dones.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DonesService {
  constructor(
    private doneRepository: DonesRepository,
    private userService: UsersService,
  ) {}

  async getDones(id: number): Promise<AllUserDones | null> {
    const favorites = this.doneRepository.getDones(id);
    return favorites;
  }

  async updateDones(
    recipeId: number,
    userId: number,
    username: string,
  ): Promise<void> {
    const user = await this.userService.findByUsername(username);

    if (!user || user.id !== userId) throw new UnauthorizedException();

    await this.doneRepository.updateDones(recipeId, userId);
  }
}
