// import { Ingredients } from '../ingredient/IIngredient';

export interface ICategory {
  id: number;
  categoryName: string;
  categoryType: string;
}

export type Ingredients = {
  ingredient: string | null;
  measure: string | null;
};

export type IRecipe = {
  id: number;
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