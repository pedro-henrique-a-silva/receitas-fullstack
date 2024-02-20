import { Categorie, Recipe } from '@prisma/client';
import { ID } from 'src/Interfaces';

export interface IRecipeRepository {
  findAll(recipeTypey: string): Promise<Recipe[]>;
  findById(id: ID, recipeType: string): Promise<Recipe | null>;
  findAllCategories(
    recipeType: string,
  ): Promise<Pick<Categorie, 'categoryName'>[]>;
  findByCategory(recipeType: string, categoryName: string): Promise<Recipe[]>;
}
