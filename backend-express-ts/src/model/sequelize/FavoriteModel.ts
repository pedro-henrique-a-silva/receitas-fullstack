import { IRecipeWithCategoryFromModel } from '../../interfaces/recipe/IRecipe';
import {
  AllUserFavorites,
  IFavorite,
  favoritesFromDBSequelize,
} from '../../interfaces/favorite/IFavorite';
import IFavoriteModel from '../../interfaces/favorite/IFavoriteModel';
import SequelizeFavorite from '../../database/models/SequelizeFavorite';
import SequelizeUser from '../../database/models/SequelizeUser';
import getFavoritesQuerie from './queries/getFavoritesQuerie';

export default class FavoriteModel implements IFavoriteModel {
  private favoriteModel = SequelizeFavorite;
  private userModel = SequelizeUser;

  async getFavorites(id: number): Promise<AllUserFavorites> {
    const favorites = await this.userModel.findOne(getFavoritesQuerie(id));

    const {
      favoriteRecipes,
      ...restDones
    } = favorites?.dataValues as never as favoritesFromDBSequelize;

    const recipeList = favoriteRecipes
      .map((recipe) => recipe.dataValues) as never as IRecipeWithCategoryFromModel[];
    const newRecipeList = recipeList.map(FavoriteModel.responseRecipeList);

    return { ...restDones, favoriteRecipes: newRecipeList };
  }

  async updateFavorites(recipeId: number, userId: number): Promise<boolean> {
    const favorite = await this.favoriteModel.findOne({
      where: { userId, recipeId },
    });

    if (favorite) {
      await this.favoriteModel.destroy({
        where: { userId, recipeId },
      });

      return false;
    }

    await this.favoriteModel.create({
      userId,
      recipeId,
    });
    return true;
  }

  async getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null> {
    const favorite = await this.favoriteModel.findOne({
      where: { userId, recipeId },
    });

    return favorite;
  }

  static responseRecipeList(recipe: IRecipeWithCategoryFromModel) {
    const { categoryId, category, ...restRecipe } = recipe;

    return {
      ...restRecipe,
      categoryName: category.categoryName,
    };
  }
}
