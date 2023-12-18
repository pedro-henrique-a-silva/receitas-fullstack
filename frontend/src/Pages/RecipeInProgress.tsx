import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonFixed, DescriptionContainer } from './RecipeInProgressStyled';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { getFromLocalStorage,
  saveToLocalStorage } from '../utils/utilsLocalStorage';
import FetchAPI from '../hooks/FetchAPI';
import Message from '../components/Message';
import RecipeCover from '../components/RecipeCover';

type RecipeInProgressProps = {
  mealOrDrink: 'meals' | 'drinks';
};

function RecipeInProgress(props: RecipeInProgressProps) {
  const { mealOrDrink } = props;
  const { recipeID } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState<any>({});

  const [recipeInProgress, setRecipeInProgress] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { fetchUpdateFavorites, fetchDetails, fetchUpdateDones } = FetchAPI();

  const getIngredients = () => Object
    .entries(recipeDetails)
    .filter(([key, value]) => key.includes('strIngredient') && value)
    .map((values, index) => (`${values[1]} ${recipeDetails[`strMeasure${index + 1}`]
    || ''}`));

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleFavoriteClick = async () => {
    const { favorite } = await fetchUpdateFavorites(recipeDetails.id)
    setFavorite(favorite)
  };

  const handleShareClick = () => {
    const { location: { origin, pathname } } = window;
    const url = `${origin}${pathname}`;
    navigator.clipboard.writeText(url.replace('/in-progress', ''));
    toggleIsVisible();
  };

  const handleIngredientChange = (
    ingredientID: number,
    ingredientName: string,
  ) => {

    const currentIndex = recipeInProgress.indexOf(ingredientName);
    const ingredientsProgress = [...recipeInProgress];

    if (currentIndex === -1) {
      ingredientsProgress.push(ingredientName);
    } else {
      ingredientsProgress.splice(currentIndex, 1);
    }

    saveToLocalStorage(mealOrDrink, recipeID, ingredientsProgress);
    setRecipeInProgress(ingredientsProgress);
  };

  const handleFinishRecipe = async () => {
    await fetchUpdateDones(recipeDetails.id)

    navigate('/done-recipes');
  };

  useEffect(() => {
    const getDetails = async () => {
      const details = await fetchDetails(mealOrDrink, recipeID);
      if (details) {
        setRecipeDetails(details);
        setFavorite(details.favorite);
      }
    };

    const recipeInProgressLocalStore = getFromLocalStorage('inProgressRecipes')
    || { meals: {}, drinks: {} };
    let ingredientsProgress = [];

    const recipesData = recipeInProgressLocalStore[mealOrDrink];
    if (Object.keys(recipesData).includes(recipeID as string)) {
      ingredientsProgress = recipesData[recipeID as string];
    }
    getDetails();
    setRecipeInProgress(ingredientsProgress);
  }, [recipeID, mealOrDrink]);

  
  if (Object.entries(recipeDetails).length === 0) return (<div>Loading...</div>);

  return (
    <>
      {(isVisible) && <Message toggleIsVisible={ toggleIsVisible } />}
      <RecipeCover
        mealOrDrink={ mealOrDrink }
        favorite={ favorite }
        handleShareClick={ handleShareClick }
        handleFavoriteClick={ handleFavoriteClick }
        recipeDetails={ recipeDetails }
      />
      <h3>Ingredients</h3>
      <List >
        {getIngredients().map((ingredient, index) => (
            <ListItem
              disablePadding
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              <ListItemButton
                role={undefined}
                onClick={ () => handleIngredientChange(index, ingredient.trim())}
              >
                <ListItemIcon>
                  {/* <Dot size={32} color="#3c3939" weight="fill" /> */}
                  <Checkbox
                    checked={recipeInProgress.indexOf(ingredient.trim()) !== -1}
                    name={ ingredient.trim() }
                    id={ ingredient.trim() }
                    disableRipple
                    inputProps={{ 'aria-labelledby': `checkbox - ${index}` }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={`checkbox - ${index}`}
                  primary={ingredient as string}
                />
              </ListItemButton>
            </ListItem>
          
          ))}
      </List>
      <h3>Instructions</h3>
      <DescriptionContainer maxWidth="sm">
        <p data-testid="instructions">{recipeDetails?.strInstructions}</p>
      </DescriptionContainer>
      <ButtonFixed
        type="button"
        onClick={ handleFinishRecipe }
        disabled={ recipeInProgress.length !== getIngredients().length }
        data-testid="finish-recipe-btn"
        variant="contained"
        color="secondary"
      >
        Finish Recipe
      </ButtonFixed>
    </>
  );
}

export default RecipeInProgress;
