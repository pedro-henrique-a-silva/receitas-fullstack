import { PrismaClient } from '@prisma/client';
import IDonesModel from '../../interfaces/dones/IDonesModel';
import { AllUserDones, DonesFromDB } from '../../interfaces/dones/IDones';
import getDonesQuerie from './queries/getDonesQuerie';
import { RecipeList } from '../../interfaces/favorite/IFavorite';

export default class DoneModel implements IDonesModel {
  constructor(
    private prisma = new PrismaClient(),
  ) {}

  async getDones(id: number): Promise<AllUserDones> {
    const dones = await this.prisma.user.findUnique(getDonesQuerie(id));
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
      await this.prisma.doneRecipes.deleteMany({
        where: { userId, recipeId },
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
