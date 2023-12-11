import { useNavigate } from 'react-router-dom';

function FetchAPI() {
  const navigate = useNavigate()

  const constructRequestHeader = () => {
    const token = localStorage.getItem('token') || ''
    return {
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
   };
  }

  const fetchAllRecipes = async (mealOrDrink: string) => {
    const requestOptions = constructRequestHeader();
    const recipes = await fetch(`http://localhost:3001/${mealOrDrink}/all`, requestOptions);
    const recipesJson = await recipes.json();
  
    if (recipes.status === 401) {
      navigate('/')
      return
    }
  
    return recipesJson;
  };

  const fetchRecipesByCategory = async (mealOrDrink: string, category: string) => {
    const requestOptions = constructRequestHeader();
    const recipesByCategory = await fetch(`http://localhost:3001/${mealOrDrink}/category/${category}`,requestOptions);
    const recipesByCategoryJson = await recipesByCategory.json();
  
    if (recipesByCategory.status === 401) {
      navigate('/')
      return
    }

    if (recipesByCategoryJson.length === 0) {
      return fetchAllRecipes(mealOrDrink)
    }
  
    return recipesByCategoryJson;
  };

  const fetchCategoriesList = async (mealOrDrink: string) => {
    const requestOptions = constructRequestHeader();
    const categories = await fetch(`http://localhost:3001/${mealOrDrink}/all/categories`, requestOptions)
    const categoriesJson = await categories.json()

    if (categories.status === 401) {
      navigate('/')
      return
    }

    return categoriesJson
  }
  
  const fetchDetails = async (mealOrDrink: string, recipeID: string | undefined) => {
    const requestOptions = constructRequestHeader();
    const recipe = await fetch(`http://localhost:3001/${mealOrDrink}/${recipeID}`, requestOptions);
    const recipeJson = await recipe.json();

    if (recipe.status === 401) {
      navigate('/')
      return
    }
    
    return recipeJson;
  };

  const fetchFavorites = async () => {
    const requestOptions = constructRequestHeader();
    const favorites = await fetch(`http://localhost:3001/favorites`, requestOptions);
    const favoritesJson = await favorites.json();
    
    if (favorites.status === 401) {
      navigate('/')
      return
    }
    
    return favoritesJson;
  };
  return {
    fetchAllRecipes,
    fetchRecipesByCategory,
    fetchDetails,
    fetchCategoriesList,
    fetchFavorites
  }
}

export default FetchAPI;