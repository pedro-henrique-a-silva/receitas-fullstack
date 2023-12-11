export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  name: string;
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

type CategoryName = {
  categoryName: string
}

export type DoneRecipeType = {
  id: string,
  recipeType: string,
  strArea: string,
  category: CategoryName,
  alcoholicOrNot: string,
  strName: string,
  strThumb: string,
  doneDate: string,
  strTags: string[],
  tags: string[]
};
