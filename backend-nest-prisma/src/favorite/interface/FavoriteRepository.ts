import { AllUserFavorites } from './favorite.interface';

export default abstract class FavoriteRepository {
  abstract getFavorites(id: number): Promise<AllUserFavorites | null>;
  abstract updateFavorites(recipeId: number, userId: number): Promise<void>;
}
