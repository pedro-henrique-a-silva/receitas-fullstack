import { useNavigate } from 'react-router-dom';

function FetchAPI() {
  const navigate = useNavigate()

  const RequestHeader = () => {
    const token = localStorage.getItem('token') || ''
    return {
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
   };
  }

  const RequestHeaderUpdateFavorite = (recipeId: number) => {
    const token = localStorage.getItem('token') || '';
    const postData = {recipeId}
    return {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData)
   };
  }

  const fetchAllRecipes = async (mealOrDrink: string) => {
    const requestOptions = RequestHeader();
    const recipes = await fetch(`http://localhost:3001/${mealOrDrink}/all`, requestOptions);
    const recipesJson = await recipes.json();
  
    if (recipes.status === 401) {
      navigate('/')
      return
    }
  
    return recipesJson;
  };

  const fetchRecipesByCategory = async (mealOrDrink: string, category: string) => {
    const requestOptions = RequestHeader();
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
    const requestOptions = RequestHeader();
    const categories = await fetch(`http://localhost:3001/${mealOrDrink}/all/categories`, requestOptions)
    const categoriesJson = await categories.json()

    if (categories.status === 401) {
      navigate('/')
      return
    }

    return categoriesJson
  }
  
  const fetchDetails = async (mealOrDrink: string, recipeID: string | undefined) => {
    const requestOptions = RequestHeader();
    const recipe = await fetch(`http://localhost:3001/${mealOrDrink}/${recipeID}`, requestOptions);
    const recipeJson = await recipe.json();

    if (recipe.status === 401) {
      navigate('/')
      return
    }
    
    return recipeJson;
  };

  const fetchFavorites = async () => {
    const requestOptions = RequestHeader();
    const favorites = await fetch(`http://localhost:3001/favorites/`, requestOptions);
    const favoritesJson = await favorites.json();
    
    if (favorites.status === 401) {
      navigate('/')
      return
    }
    
    return favoritesJson;
  };

  const fetchUpdateFavorites = async (recipeID: number) => {
    const requestOptions = RequestHeaderUpdateFavorite(recipeID);
    const favorites = await fetch(`http://localhost:3001/favorites`, requestOptions);
    const favoritesJson = await favorites.json();
    
    if (favorites.status === 401) {
      navigate('/')
      return
    }
    
    return favoritesJson;
  };

  const fetchDones = async () => {
    const requestOptions = RequestHeader();
    const dones = await fetch(`http://localhost:3001/done/`, requestOptions);
    const donesJson = await dones.json();
    
    if (dones.status === 401) {
      navigate('/')
      return
    }
    
    return donesJson;
  };

  const fetchUpdateDones = async (recipeID: number) => {
    const requestOptions = RequestHeaderUpdateFavorite(recipeID);
    const dones = await fetch(`http://localhost:3001/done`, requestOptions);
    const donesJson = await dones.json();
    
    if (dones.status === 401) {
      navigate('/')
      return
    }
    
    return donesJson;
  };
  return {
    fetchAllRecipes,
    fetchRecipesByCategory,
    fetchDetails,
    fetchCategoriesList,
    fetchFavorites,
    fetchUpdateFavorites,
    fetchDones,
    fetchUpdateDones
  }
}

export default FetchAPI;