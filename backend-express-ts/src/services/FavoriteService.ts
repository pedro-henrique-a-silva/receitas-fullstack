import { ServiceResponse } from '../interfaces/ServiceResponse';
import IUserModel from '../interfaces/user/IUserModel';
import { AllUserFavorites } from '../interfaces/favorite/IFavorite';
import IFavoriteModel from '../interfaces/favorite/IFavoriteModel';
// import FavoriteModel from '../model/sequelize/FavoriteModel';
import FavoriteModel from '../model/prisma/FavoriteModel';
// import UserModel from '../model/sequelize/UserModel';
import UserModel from '../model/prisma/UserModel';

export default class FavoriteService {
  constructor(
    private favoriteModel: IFavoriteModel = new FavoriteModel(),
    private userModel: IUserModel = new UserModel(),
  ) {}

  async getFavorites(id: number): Promise<ServiceResponse<AllUserFavorites>> {
    const favorites = await this.favoriteModel.getFavorites(id);
    return { status: 'SUCCESSFUL', data: favorites };
  }

  async updateFavorites(
    recipeId: number,
    userId: number,
    username: string,
  ): Promise<ServiceResponse<{ message: boolean }>> {
    const user = await this.userModel.findByUsername(username);

    if (!user || user.id !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'unauthorized' } };
    }

    const isFavorited = await this.favoriteModel.updateFavorites(recipeId, userId);
    return { status: 'SUCCESSFUL', data: { message: isFavorited } };
  }
}
