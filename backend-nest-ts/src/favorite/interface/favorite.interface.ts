import { User } from '@prisma/client';
import { IRecipeWithCategoryFromModel, IRecipeWithCategoryName } from 'src/recipes/interface/recipes.interface';

export interface RecipeList {
  recipe: IRecipeWithCategoryFromModel;
}

export interface IFavorite {
  userId: number;
  recipeId: number;
}

export interface FavoritesFromDB extends Omit<User, 'password'> {
  favoriteRecipes: RecipeList[]
}

export interface AllUserFavorites extends Omit<User, 'id' | 'password'> {
  favoriteRecipes: IRecipeWithCategoryName[];
}
