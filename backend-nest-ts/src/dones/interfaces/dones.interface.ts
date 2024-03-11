import { Recipe, User } from '@prisma/client';
import { RecipeList } from 'src/favorite/interface/favorite.interface';
import { IRecipeWithCategoryFromModel, IRecipeWithCategoryName } from 'src/recipes/interface/recipes.interface';
export interface Dones {}

export interface IRecipeWithDataValues {
  dataValues: IRecipeWithCategoryFromModel
}

export interface IDones {
  userId: number;
  recipeId: number;
}

export interface DonesFromDB extends Omit<User, 'password'> {
  doneRecipes: RecipeList[]
}

export interface DonesFromDBSequelize extends Omit<User, 'password'> {
  doneRecipes: IRecipeWithDataValues[]
}

export interface AllUserDones extends Omit<User, 'id' | 'password'> {
  doneRecipes: IRecipeWithCategoryName[];
}
