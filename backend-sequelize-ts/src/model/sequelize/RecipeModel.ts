import { ICategory } from '../../interfaces/category/ICategory';
import {
  IRecipeWithCategoryFromModel,
  IRecipeWithCategoryName,
} from '../../interfaces/recipe/IRecipe';
import { IRecipeModel } from '../../interfaces/recipe/IRecipeModel';

import SequelizeRecipe from '../../database/models/SequelizeRecipe';
import SequelizeCategory from '../../database/models/SequelizeCategory';

export default class RecipeModel implements IRecipeModel {
  private recipeModel = SequelizeRecipe;
  private categoryModel = SequelizeCategory;

  public async findAll(recipeType: string): Promise<IRecipeWithCategoryName[]> {
    const recipes = await this.recipeModel.findAll({
      where: { recipeType },
      include: {
        model: SequelizeCategory,
        as: 'category',
        attributes: ['categoryName'],
      },
      order: [['strName', 'ASC']],
    });

    const newRecipeList = recipes
      .map((recipe) => recipe.dataValues) as never as IRecipeWithCategoryFromModel[];

    return newRecipeList.map(RecipeModel.responseRecipeList);
  }

  public async findById(id: number): Promise<IRecipeWithCategoryName | null> {
    const recipeById = await this.recipeModel.findByPk(id, {
      include: {
        model: SequelizeCategory,
        as: 'category',
        attributes: ['categoryName'],
      },
    });

    if (recipeById?.dataValues) {
      const {
        categoryId,
        category,
        ...restRecipe } = recipeById.dataValues as never as IRecipeWithCategoryFromModel;

      return {
        ...restRecipe,
        categoryName: category.categoryName,
      };
    }

    return null;
  }

  public async findAllCategories(recipeType: string): Promise<Pick<ICategory, 'categoryName'>[]> {
    const categories = await this.categoryModel.findAll({
      attributes: ['categoryName'],
      where: { categoryType: recipeType },
    });

    return categories.map((category) => ({ categoryName: category.categoryName }));
  }

  public async findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<IRecipeWithCategoryName[]> {
    const recipesByCategory = await this.recipeModel.findAll({
      include: {
        model: SequelizeCategory,
        as: 'category',
        where: { categoryName },
        attributes: ['categoryName'],
      },
      where: { recipeType },
      order: [['strName', 'ASC']],
    });

    const newRecipeList = recipesByCategory
      .map((recipe) => recipe.dataValues) as never as IRecipeWithCategoryFromModel[];

    return newRecipeList.map(RecipeModel.responseRecipeList);
  }

  static responseRecipeList(recipe: IRecipeWithCategoryFromModel) {
    const { categoryId, category, ...restRecipe } = recipe;

    return {
      ...restRecipe,
      categoryName: category.categoryName,
    };
  }
}
