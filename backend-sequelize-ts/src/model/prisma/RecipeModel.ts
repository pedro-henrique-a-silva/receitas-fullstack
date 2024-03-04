import { PrismaClient } from '@prisma/client';
import { IRecipeModel } from '../../interfaces/recipe/IRecipeModel';
import { ICategory } from '../../interfaces/category/ICategory';
import {
  IRecipeWithCategoryFromModel,
  IRecipeWithCategoryName,
} from '../../interfaces/recipe/IRecipe';

export default class RecipeModel implements IRecipeModel {
  constructor(
    private prisma = new PrismaClient(),
  ) {}

  public async findAll(type: string): Promise<IRecipeWithCategoryName[]> {
    const recipes = await this.prisma.recipe.findMany({
      include: {
        category: { select: { categoryName: true } },
        ingredients: { select: { ingredient: true, measure: true }, orderBy: [{ order: 'asc' }] },
      },
      where: { recipeType: type },
      orderBy: [{ strName: 'asc' }],
    });

    return recipes.map(RecipeModel.responseRecipeList);
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
  ): Promise<Pick<ICategory, 'categoryName'>[]> {
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

    return recipesByCategory.map(RecipeModel.responseRecipeList);
  }

  static responseRecipeList(recipe: IRecipeWithCategoryFromModel) {
    const { categoryId, category, ...restRecipe } = recipe;

    return {
      ...restRecipe,
      categoryName: category.categoryName,
    };
  }
}
