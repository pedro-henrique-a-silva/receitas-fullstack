import { IRecipe } from '../recipe/IRecipe';
import { IUser } from '../user/IUser';

export interface IFavorite {
  userId: number;
  recipeId: number;
}

export interface RecipeList {
  recipe: IRecipe;
}

export interface AllUserFavorites extends Omit<IUser, 'id' | 'password'> {
  favoriteRecipes: RecipeList[];
}
