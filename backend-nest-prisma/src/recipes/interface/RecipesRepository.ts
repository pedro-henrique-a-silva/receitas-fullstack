import { Categorie, Recipe } from '@prisma/client';
import { ID } from 'src/Interfaces';

export abstract class RecipeRepository {
  abstract findAll(recipeTypey: string): Promise<Recipe[]>;
  abstract findById(id: ID, recipeType: string): Promise<Recipe | null>;
  abstract findAllCategories(
    recipeType: string,
  ): Promise<Pick<Categorie, 'categoryName'>[]>;
  abstract findByCategory(
    recipeType: string,
    categoryName: string,
  ): Promise<Recipe[]>;
}
