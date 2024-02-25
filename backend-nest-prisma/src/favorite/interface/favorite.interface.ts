import { Recipe, User } from '@prisma/client';

export interface Favorite {}

export interface RecipeList {
  recipe: Recipe;
}

export interface AllUserFavorites extends Omit<User, 'id' | 'password'> {
  FavoriteRecipes: RecipeList[];
}
