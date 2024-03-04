import { Identifiable } from '..';

export interface IIngredient extends Identifiable {
  recipeId: number;
  ingredient: string;
  order: number;
  measure: string;
}

export type Ingredients = {
  ingredient: string | null;
  measure: string | null;
};
