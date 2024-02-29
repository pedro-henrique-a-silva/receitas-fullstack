import { RecipeRepository } from './interface/RecipesRepository';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Category, Recipe } from '@prisma/client';

@Injectable()
export class PrismaRecipesRepository implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(type: string) {
    const recipes = this.prisma.recipe.findMany({
      where: { recipeType: type },
    });

    return recipes;
  }

  async findById(id: number, type: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: id, recipeType: type },
    });

    return recipe;
  }

  async findAllCategories(
    recipeType: string,
  ): Promise<Pick<Category, 'categoryName'>[]> {
    const categories = await this.prisma.category.findMany({
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
