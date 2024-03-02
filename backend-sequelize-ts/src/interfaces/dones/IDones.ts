import { IRecipe } from '../recipe/IRecipe';
import { IUser } from '../user/IUser';

export interface IDones {
  userId: number;
  recipeId: number;
}

export interface RecipeList {
  recipe: IRecipe;
}

export interface AllUserDones extends Omit<IUser, 'id' | 'password'> {
  donesRecipes: RecipeList[];
}
