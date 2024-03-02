import { AllUserFavorites, IFavorite } from '../interfaces/favorite/IFavorite';
import IFavoriteModel from '../interfaces/favorite/IFavoriteModel';
import SequelizeFavorite from '../database/models/SequelizeFavorite';
import SequelizeUser from '../database/models/SequelizeUser';
import SequelizeRecipe from '../database/models/SequelizeRecipe';

export default class FavoriteModel implements IFavoriteModel {
  private favoriteModel = SequelizeFavorite;
  private userModel = SequelizeUser;

  async getFavorites(id: number): Promise<AllUserFavorites | null> {
    const favorites = await this.userModel.findOne({
      attributes: ['id', 'name', 'username'],
      include: [
        { model: SequelizeRecipe, through: { attributes: [] }, as: 'favoriteRecipes' },
      ],
      where: { id },
    });

    return favorites?.dataValues as never as AllUserFavorites;
  }

  async updateFavorites(recipeId: number, userId: number): Promise<IFavorite | null> {
    const favorite = await this.favoriteModel.findOne({
      where: { userId, recipeId },
    });

    if (favorite) {
      await this.favoriteModel.destroy({
        where: { userId, recipeId },
      });

      return null;
    }

    const favoriteCreated = await this.favoriteModel.create({
      userId,
      recipeId,
    });

    return favoriteCreated;
  }

  async getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null> {
    const favorite = await this.favoriteModel.findOne({
      where: { userId, recipeId },
    });

    return favorite;
  }
}
