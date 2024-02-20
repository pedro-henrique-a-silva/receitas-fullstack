import { Injectable } from '@nestjs/common';
import { IDonesRepository } from './interfaces/IDonesRepository';
import { PrismaService } from 'src/prisma/prisma.service';
import { AllUserDones } from './interfaces/dones.interface';

@Injectable()
export default class DonesRepository implements IDonesRepository {
  constructor(private prisma: PrismaService) {}

  async getDones(id: number): Promise<AllUserDones | null> {
    const dones = await this.prisma.user.findUnique({
      select: {
        name: true,
        username: true,
        DoneRecipes: {
          select: { recipe: true },
        },
      },
      where: { id },
    });

    return dones;
  }

  async updateDones(recipeId: number, userId: number): Promise<void> {
    const dones = await this.prisma.doneRecipes.findFirst({
      where: { recipeId, userId },
    });

    if (dones) {
      await this.prisma.doneRecipes.delete({
        where: {
          userId_recipeId: {
            userId,
            recipeId,
          },
        },
      });
      return;
    }

    await this.prisma.doneRecipes.create({
      data: {
        userId,
        recipeId,
      },
    });

    return;
  }
}
