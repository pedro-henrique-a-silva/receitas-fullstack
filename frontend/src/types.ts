export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
  email: string;
  password: string;
};

export type Ingredients = {
  ingredient: string;
  measure: string;
}

export type Recipe = {
  strThumb: string;
  strName: string;
  strCategory: string;
  id: number;
};

export type ContextType = {
  recipes: Recipe[],
  updateRecipes: (recipesData: any[]) => void,
};

export type DoneRecipeType = {
  id: number,
  strName: string;
  categoryName: string;
  recipeType: string;
  strAlcoholic?: string | null,
  strGlass: string | null;
  strArea: string | null;
  strInstructions: string;
  strThumb: string;
  strTags: string | null;
  strYoutube: string | null;
};

export type RecipeDetailsType = {
  id: number,
  strName: string;
  categoryName: string;
  recipeType: string;
  strAlcoholic?: string | null,
  strGlass: string | null;
  strArea: string | null;
  strInstructions: string;
  strThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  ingredients: Ingredients[]
};
