import { ID } from 'src/Interfaces';
import { ICategory, IRecipeWithCategoryName } from './recipes.interface';

export abstract class RecipeRepository {
  abstract findAll(recipeTypey: string): Promise<IRecipeWithCategoryName[]>;
  abstract findById(id: ID): Promise<IRecipeWithCategoryName | null>;
  abstract findAllCategories(
    recipeType: string,
  ): Promise<Pick<ICategory, 'categoryName'>[]>;
  abstract findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<IRecipeWithCategoryName[]>;
}
