import { Identifiable } from '..';

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
};

export type IRecipeWithCategoryFromModel = IRecipe & {
  categoryId: number;
  category: { categoryName: string };
};

export type IRecipeWithCategoryName = IRecipe & {
  categoryName: string;
};

export type IRecipeWithFavorite = IRecipe & {
  favorite?: boolean;
};
