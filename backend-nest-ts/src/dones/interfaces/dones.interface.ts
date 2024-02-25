import { Recipe, User } from '@prisma/client';
export interface Dones {}

export interface RecipeList {
  recipe: Recipe;
}

export interface AllUserDones extends Omit<User, 'id' | 'password'> {
  DoneRecipes: RecipeList[];
}
