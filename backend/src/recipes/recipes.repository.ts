import { IRecipeRepository } from './interface/IRecipesRepository';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesRepository implements IRecipeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(type: string) {
    const recipes = this.prisma.recipe.findMany({
      where: { recipeType: type },
    });

    return recipes;
  }

  findById(id: number, type: string) {
    const recipe = this.prisma.recipe.findUnique({
      where: { id: id, recipeType: type },
    });

    return recipe;
  }
}
