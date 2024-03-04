import { RecipeList } from '../favorite/IFavorite';
import { IRecipeWithCategoryFromModel, IRecipeWithCategoryName } from '../recipe/IRecipe';
import { IUser } from '../user/IUser';

export interface IRecipeWithDataValues {
  dataValues: IRecipeWithCategoryFromModel
}

export interface IDones {
  userId: number;
  recipeId: number;
}

export interface DonesFromDB extends Omit<IUser, 'password'> {
  doneRecipes: RecipeList[]
}

export interface DonesFromDBSequelize extends Omit<IUser, 'password'> {
  doneRecipes: IRecipeWithDataValues[]
}

export interface AllUserDones extends Omit<IUser, 'id' | 'password'> {
  doneRecipes: IRecipeWithCategoryName[];
}
