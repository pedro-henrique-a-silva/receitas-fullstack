import { ID } from '..';
import { ICategory } from '../category/ICategory';
import { IRecipe } from './IRecipe';

export interface IRecipeModel {
  findAll(recipeType: string): Promise<IRecipe[]>;
  findById(id: ID): Promise<IRecipe | null>;
  findAllCategories(
    recipeType: string,
  ): Promise<Pick<ICategory, 'categoryName'>[]>;
  findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<IRecipe[]>;
}
