import { IRecipeWithCategoryFromModel } from '../../interfaces/recipe/IRecipe';
import SequelizeDone from '../../database/models/SequelizeDone';
import SequelizeUser from '../../database/models/SequelizeUser';
import {
  AllUserDones,
  DonesFromDBSequelize,
} from '../../interfaces/dones/IDones';
import IDonesModel from '../../interfaces/dones/IDonesModel';
import getDonesQuerie from './queries/getDonesQuerie';

export default class DoneModel implements IDonesModel {
  private userModel = SequelizeUser;
  private doneModel = SequelizeDone;

  async getDones(id: number): Promise<AllUserDones> {
    const dones = await this.userModel.findOne(getDonesQuerie(id));

    const { doneRecipes, ...restDones } = dones?.dataValues as never as DonesFromDBSequelize;

    const recipeList = doneRecipes
      .map((recipe) => recipe.dataValues) as never as IRecipeWithCategoryFromModel[];
    const newRecipeList = recipeList.map(DoneModel.responseRecipeList);

    return { ...restDones, doneRecipes: newRecipeList };
  }

  async updateDones(recipeId: number, userId: number): Promise<boolean> {
    const done = await this.doneModel.findOne({
      where: { userId, recipeId },
    });

    if (done) {
      await this.doneModel.destroy({
        where: { userId, recipeId },
      });

      return false;
    }

    await this.doneModel.create({ userId, recipeId });
    return true;
  }

  static responseRecipeList(recipe: IRecipeWithCategoryFromModel) {
    const { categoryId, category, ...restRecipe } = recipe;

    return {
      ...restRecipe,
      categoryName: category.categoryName,
    };
  }
}
