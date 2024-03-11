import { Injectable } from '@nestjs/common';
import DonesRepository from './interfaces/DonesRepository';
import { PrismaService } from 'src/prisma/prisma.service';
import { AllUserDones, DonesFromDB } from './interfaces/dones.interface';
import { RecipeList } from 'src/favorite/interface/favorite.interface';
import getDonesQueries from './queries/getDonesQueries';

@Injectable()
export default class PrismaDonesRepository implements DonesRepository {
  constructor(private prisma: PrismaService) {}

  async getDones(id: number): Promise<AllUserDones | null> {
    const dones = await this.prisma.user.findUnique(getDonesQueries(id));
    const { doneRecipes, ...restdones } = dones as never as DonesFromDB;

    const donesRecipesList = doneRecipes
      .map((recipe: RecipeList) => {
        const { categoryId, category, ...restRecipe } = recipe.recipe;
        return { ...restRecipe, categoryName: category.categoryName };
      });

    return { ...restdones, doneRecipes: donesRecipesList };
  }

  async updateDones(recipeId: number, userId: number): Promise<boolean> {
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
      return false;
    }

    await this.prisma.doneRecipes.create({
      data: {
        userId,
        recipeId,
      },
    });

    return true;
  }
}
