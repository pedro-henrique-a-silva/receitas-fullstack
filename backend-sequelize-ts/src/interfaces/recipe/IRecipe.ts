import { Identifiable } from '..';
import { Ingredients } from '../ingredient/IIngredient';

export type IRecipe = Identifiable & {
  strName: string;
  categoryId?: number;
  recipeType: string;
  strAlcoholic?: string | null,
  strGlass: string | null;
  strArea: string | null;
  strInstructions: string;
  strThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  ingredients?: Ingredients[]
};

export type IRecipeWithCategoryFromModel = IRecipe & {
  category: { categoryName: string };
};

export type IRecipeWithCategoryName = IRecipe & {
  categoryName: string;
};

export type IRecipeWithFavorite = IRecipe & {
  favorite?: boolean;
};
