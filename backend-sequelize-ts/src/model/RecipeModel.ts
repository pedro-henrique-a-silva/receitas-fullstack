import { ICategory } from '../interfaces/category/ICategory';
import { IRecipe } from '../interfaces/recipe/IRecipe';
import { IRecipeModel } from '../interfaces/recipe/IRecipeModel';

import SequelizeRecipe from '../database/models/SequelizeRecipe';
import SequelizeCategory from '../database/models/SequelizeCategory';

export default class RecipeModel implements IRecipeModel {
  private recipeModel = SequelizeRecipe;
  private categoryModel = SequelizeCategory;

  public async findAll(recipeType: string): Promise<IRecipe[]> {
    const recipes = await this.recipeModel.findAll({
      where: { recipeType },
      order: [['strName', 'ASC']],
    });

    return recipes.map((recipe) => recipe.dataValues);
  }

  public async findById(id: number): Promise<IRecipe | null> {
    const recipeById = await this.recipeModel.findByPk(id, {
      include: {
        model: SequelizeCategory,
        as: 'category',
        attributes: ['categoryName'],
      },
    });

    return recipeById?.dataValues || null;
  }

  public async findAllCategories(recipeType: string): Promise<Pick<ICategory, 'categoryName'>[]> {
    const categories = await this.categoryModel.findAll({
      attributes: ['categoryName'],
      where: { categoryType: recipeType },
    });

    return categories.map((category) => ({ categoryName: category.categoryName }));
  }

  public async findByCategory(recipeType: string, categoryName: string): Promise<IRecipe[]> {
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

    return recipesByCategory;
  }
}
