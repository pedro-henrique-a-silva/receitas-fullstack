import { Recipe } from '@prisma/client';
import { ID } from 'src/Interfaces';

export interface IRecipeRepository {
  findAll(type: string): Promise<Recipe[]>;
  findById(id: ID, type: string): Promise<Recipe | null>;
}
