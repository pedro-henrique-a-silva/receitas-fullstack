import { IRecipeRepository } from './interface/IRecipesRepository';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Categorie, Recipe } from '@prisma/client';

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

  async findAllCategories(
    recipeType: string,
  ): Promise<Pick<Categorie, 'categoryName'>[]> {
    const categories = await this.prisma.categorie.findMany({
      select: { categoryName: true },
      where: { categoryType: recipeType },
    });

    return categories;
  }

  async findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<Recipe[]> {
    const recipesByCategory = await this.prisma.recipe.findMany({
      where: { recipeType, category: { categoryName } },
      orderBy: [{ strName: 'asc' }],
      include: {
        category: {
          select: { categoryName: true },
        },
      },
    });

    return recipesByCategory;
  }
}
