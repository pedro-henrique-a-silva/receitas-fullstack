import { RecipeRepository } from './interface/RecipesRepository';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Category, Recipe } from '@prisma/client';
import { IRecipeWithCategoryFromModel, IRecipeWithCategoryName } from './interface/recipes.interface';

@Injectable()
export class PrismaRecipesRepository implements RecipeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(type: string): Promise<IRecipeWithCategoryName[]> {
    const recipes = await this.prisma.recipe.findMany({
      include: {
        category: {select: { categoryName: true } },
        ingredients: { select: { ingredient: true, measure: true }, orderBy: [{ order: 'asc' }] },
      },
      where: { recipeType: type },
      orderBy: [{ strName: 'asc' }],
    });

    return recipes.map(PrismaRecipesRepository.responseRecipeList);
  }

  async findById(id: number): Promise<IRecipeWithCategoryName | null> {
    const recipe = await this.prisma.recipe.findUnique({
      include: {
        category: { select: { categoryName: true } },
        ingredients: { select: { ingredient: true, measure: true }, orderBy: [{ order: 'asc' }] },
      },
      where: { id },
    });

    if (recipe) {
      const { categoryId, category, ...restRecipe } = recipe;
      return {
        ...restRecipe,
        categoryName: category.categoryName,
      };
    }

    return null;
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
  ): Promise<IRecipeWithCategoryName[]> {
    const recipesByCategory = await this.prisma.recipe.findMany({
      where: { recipeType, category: { categoryName } },
      orderBy: [{ strName: 'asc' }],
      include: { category: { select: { categoryName: true } },
      },
    });
    return recipesByCategory.map(PrismaRecipesRepository.responseRecipeList);
  }


  static responseRecipeList(recipe: IRecipeWithCategoryFromModel) {
    const { categoryId, category, ...restRecipe } = recipe;

    return {
      ...restRecipe,
      categoryName: category.categoryName,
    };
  }
}
