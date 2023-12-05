export type LoginType = {
  email: string;
  password: string;
};

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
  id: string,
  type: string,
  nationality: string,
  category: string,
  alcoholicOrNot: string,
  name: string,
  image: string,
  doneDate: string,
  tags: string[]
};
