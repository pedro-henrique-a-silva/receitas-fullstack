import {
  IRecipeWithCategoryFromModel,
  IRecipeWithCategoryName,
} from '../recipe/IRecipe';
import { IUser } from '../user/IUser';

export interface IRecipeWithDataValues {
  dataValues: IRecipeWithCategoryFromModel
}

export interface IFavorite {
  userId: number;
  recipeId: number;
}

export interface RecipeList {
  recipe: IRecipeWithCategoryFromModel;
}

export interface FavoritesFromDB extends Omit<IUser, 'password'> {
  favoriteRecipes: RecipeList[]
}

export interface favoritesFromDBSequelize extends Omit<IUser, 'password'> {
  favoriteRecipes: IRecipeWithDataValues[]
}

export interface AllUserFavorites extends Omit<IUser, 'id' | 'password'> {
  favoriteRecipes: IRecipeWithCategoryName[];
}
