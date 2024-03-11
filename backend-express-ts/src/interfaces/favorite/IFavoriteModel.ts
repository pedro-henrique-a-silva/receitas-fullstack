import { AllUserFavorites, IFavorite } from './IFavorite';

export default interface IFavoriteModel {
  getFavorites(id: number): Promise<AllUserFavorites>;
  updateFavorites(recipeId: number, userId: number): Promise<boolean>;
  getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null>;
}
