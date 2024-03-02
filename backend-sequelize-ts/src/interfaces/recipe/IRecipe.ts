import { Identifiable } from '..';

export interface IRecipe extends Identifiable {
  strName: string;
  categoryId: number;
  recipeType: string;
  strAlcoholic: string;
  strGlass: string;
  strArea: string;
  strInstructions: string;
  strThumb: string;
  strTags: string;
  strYoutube: string;
  favorite?: boolean;
}
