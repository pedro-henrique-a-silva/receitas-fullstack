import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import ButtonCard from '../components/ButtonCard';
import Header from '../components/Header';
import Footer from './Footer';
import RecipesContext from '../context/contextRecipes';
import { Recipe } from '../types';
import { ContainerStyle, CardRecipeStyle } from './RecipesStyle';
import FetchAPI from '../hooks/FetchAPI';

type RecipesProps = {
  mealOrDrink: 'meals' | 'drinks';
};

function Recipes({ mealOrDrink }: RecipesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categorys, setCategorys] = useState<any[]>([]);
  const { recipeID, recipeInProgress } = useParams();
  const navigate = useNavigate();

  const { fetchAllRecipes, fetchRecipesByCategory, fetchCategoriesList} = FetchAPI();

  const { recipes, updateRecipes } = useContext(RecipesContext);

  const handleCategorySelected = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  };

  const handleRecipeClick = (recipe: Recipe) => {
    const route = mealOrDrink === 'meals'
      ? `/meals/${recipe.id}`
      : `/drinks/${recipe.id}`;
    navigate(route);
  };

  useEffect(() => {
    const getRecipes = async () => {
      if (selectedCategory) {
        const recipesData = await fetchRecipesByCategory(mealOrDrink, selectedCategory)
        updateRecipes(recipesData.slice(0, 12));
      } else {
        const recipesData = await fetchAllRecipes(mealOrDrink);
        if (recipesData) {
          updateRecipes(recipesData.slice(0, 12));
        }
      }
    };

    getRecipes();
  }, [mealOrDrink, selectedCategory]);

  useEffect(() => {
    const getCategorys = async () => {
      const categorysData = await fetchCategoriesList(mealOrDrink);
      if (categorysData) {
        setCategorys(categorysData.slice(0, 5));
      }

      if (!categorysData.slice(0, 5).includes(selectedCategory)) {
        setSelectedCategory('');
      }
    };

    getCategorys();
  }, [mealOrDrink]);

  const isMealOrDrink = (mealOrDrink === 'meals') || (mealOrDrink === 'drinks');
  const hasRecipeID = (!recipeID || recipeInProgress);

  if (recipes.length === 0 || categorys.length === 0) return <p>Loading...</p>;

  return (
    <>
      {isMealOrDrink && hasRecipeID && (
        <Header
          title={
          mealOrDrink.charAt(0).toUpperCase() + mealOrDrink.slice(1)
          }
        />
      )}

      <ButtonCard
        categories={ categorys }
        onCategorySelected={ handleCategorySelected }
      />

      <ContainerStyle>
        {recipes.slice(0, 12).map((recipe, index) => (
          <CardRecipeStyle
            key={ index }
            data-testid={ `${index}-recipe-card` }
            onClick={ () => handleRecipeClick(recipe) }
            elevation={ 4 }
          >
            <img
              src={ recipe.strThumb }
              alt={ recipe.strName }
              data-testid={ `${index}-card-img` }
            />
            <Typography mt={ 2 } mb={ 1 } variant="h5" align="center">
              {recipe.strName}
            </Typography>
          </CardRecipeStyle>
        ))}
      </ContainerStyle>
      <Footer />
    </>
  );
}

export default Recipes;
