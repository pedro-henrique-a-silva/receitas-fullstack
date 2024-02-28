import { Identifiable } from "..";

export interface IIngredient extends Identifiable {
  recipeId: number;
  ingredient: string;
  order: number;
  measure: string;
}