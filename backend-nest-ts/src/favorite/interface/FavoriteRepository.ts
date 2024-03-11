import { AllUserFavorites, IFavorite } from './favorite.interface';

export default abstract class FavoriteRepository {
  abstract getFavorites(id: number): Promise<AllUserFavorites | null>;
  abstract updateFavorites(recipeId: number, userId: number): Promise<boolean>;
  abstract getOneFavorite(recipeId: number, userId: number): Promise<IFavorite | null>;
}
