import { ServiceResponse } from '../interfaces/ServiceResponse';
import IUserModel from '../interfaces/user/IUserModel';
import IFavoriteModel from '../interfaces/favorite/IFavoriteModel';
import FavoriteModel from '../model/FavoriteModel';
import UserModel from '../model/UserModel';

export default class FavoriteService {
  constructor(
    private favoriteModel: IFavoriteModel = new FavoriteModel(),
    private userModel: IUserModel = new UserModel(),
  ) {}

  async getFavorites(id: number) {
    const favorites = await this.favoriteModel.getFavorites(id);
    return { status: 'SUCCESSFUL', data: favorites };
  }

  async updateFavorites(
    recipeId: number,
    userId: number,
    username: string,
  ): Promise<ServiceResponse<{ message: string }>> {
    const user = await this.userModel.findByUsername(username);

    if (!user || user.id !== userId) {
      return { status: 'UNAUTHORIZED', data: { message: 'unauthorized' } };
    }

    await this.favoriteModel.updateFavorites(recipeId, userId);

    return { status: 'SUCCESSFUL', data: { message: 'favorited' } };
  }
}
