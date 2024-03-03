import { AllUserFavorites, IFavorite } from './IFavorite';

export default interface IFavoriteModel {
  getFavorites(id: number): Promise<AllUserFavorites | null>;
  updateFavorites(recipeId: number, userId: number): Promise<void>;
  getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null>;
}
