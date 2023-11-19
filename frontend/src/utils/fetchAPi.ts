export const MEALS_API_BASE = 'https://www.themealdb.com/api/json/v1/1/';
export const DRINKS_API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/';

export type UrlType = {
  [key: string]: string;
};

export interface MealData {
  idMeal: string;
  strMeal: string;
}

export const baseURL: UrlType = {
  meals: MEALS_API_BASE,
  drinks: DRINKS_API_BASE,
};

export const fetchApi = async (url: string) => {
  const allDataResponse = await fetch(url);
  const allData = await allDataResponse.json();

  return allData;
};

export const fetchDetails = async (mealOrDrink: string, recipeID: string | undefined) => {
  const url = `${baseURL[mealOrDrink]}lookup.php?i=${recipeID}`;
  return fetchApi(url);
};