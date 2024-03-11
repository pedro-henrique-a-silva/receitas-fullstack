import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Recipes from './Pages/Recipes';
import RecipeDetails from './Pages/RecipeDetails';
import RecipeInProgress from './Pages/RecipeInProgress';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />

      <Route path="/meal" element={ <Recipes mealOrDrink="meal" /> } />
      <Route path="/drink" element={ <Recipes mealOrDrink="drink" /> } />
      <Route path="/meal/:recipeID" element={ <RecipeDetails mealOrDrink="meal" /> } />
      <Route
        path="/meal/:recipeID/progress"
        element={ <RecipeInProgress mealOrDrink="meal" /> }
      />
      <Route
        path="/drink/:recipeID"
        element={ <RecipeDetails mealOrDrink="drink" /> }
      />
      <Route
        path="/drink/:recipeID/progress"
        element={ <RecipeInProgress mealOrDrink="drink" /> }
      />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/done" element={ <DoneRecipes /> } />
      <Route path="/favorite" element={ <FavoriteRecipes /> } />
    </Routes>
  );
}

export default App;
