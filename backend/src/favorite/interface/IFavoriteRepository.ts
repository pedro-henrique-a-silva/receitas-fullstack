import { AllUserFavorites } from './favorite.interface';

export interface IFavoriteRepository {
  getFavorites(id: number): Promise<AllUserFavorites | null>;
  updateFavorites(recipeId: number, userId: number): Promise<void>;
}
