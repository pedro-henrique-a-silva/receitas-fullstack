import { PrismaClient } from '@prisma/client';
import IDonesModel from '../../interfaces/dones/IDonesModel';
import { AllUserDones } from '../../interfaces/dones/IDones';

export default class DoneModel implements IDonesModel {
  constructor(
    private prisma = new PrismaClient(),
  ) {}

  async getDones(id: number): Promise<any> {
    const dones = await this.prisma.user.findUnique({
      select: {
        name: true,
        username: true,
        doneRecipes: {
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
      await this.prisma.doneRecipes.deleteMany({
        where: { userId, recipeId },
      });
      return;
    }

    await this.prisma.doneRecipes.create({
      data: {
        userId,
        recipeId,
      },
    });
  }
}
