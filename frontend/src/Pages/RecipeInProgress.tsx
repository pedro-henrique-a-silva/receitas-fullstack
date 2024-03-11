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
import { Ingredients, RecipeDetailsType } from '../types';
import { Container } from '@mui/material';

type RecipeInProgressProps = {
  mealOrDrink: 'meal' | 'drink';
};

function RecipeInProgress(props: RecipeInProgressProps) {
  const { mealOrDrink } = props;
  const { recipeID } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState<RecipeDetailsType>();

  const [recipeInProgress, setRecipeInProgress] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { fetchUpdateFavorites, fetchDetails, fetchUpdateDones } = FetchAPI();

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleFavoriteClick = async () => {
    if (recipeDetails) {
      const { favorite } = await fetchUpdateFavorites(recipeDetails?.id)
      setFavorite(favorite)
    } else {
      setFavorite(false)
    }
  };

  const handleShareClick = () => {
    const { location: { origin, pathname } } = window;
    const url = `${origin}${pathname}`;
    navigator.clipboard.writeText(url.replace('/progress', ''));
    toggleIsVisible();
  };

  const handleIngredientChange = (
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
    if (recipeDetails) {
      await fetchUpdateDones(recipeDetails.id)
      navigate('/done');
    }
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
    || { meal: {}, drink: {} };
    let ingredientsProgress = [];

    const recipesData = recipeInProgressLocalStore[mealOrDrink];
    if (recipesData && Object.keys(recipesData).includes(recipeID as string)) {
      ingredientsProgress = recipesData[recipeID as string];
    }
    getDetails();
    setRecipeInProgress(ingredientsProgress);
  }, [recipeID, mealOrDrink]);

  
  if (!recipeDetails) return (<div>Loading...</div>);

  return (
    <>
      {(isVisible) && <Message toggleIsVisible={ toggleIsVisible } />}
      <Container maxWidth="sm">
        <RecipeCover
          mealOrDrink={ mealOrDrink }
          favorite={ favorite }
          handleShareClick={ handleShareClick }
          handleFavoriteClick={ handleFavoriteClick }
          recipeDetails={ recipeDetails }
        />
      </Container>

      <Container maxWidth="sm">
        <h3>Ingredients</h3>
        <List >
          {recipeDetails.ingredients.map((item: Ingredients, index: number) => (
              <ListItem
                disablePadding
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                <ListItemButton
                  role={undefined}
                  onClick={ () => handleIngredientChange(`${item.ingredient} ${item.measure}`)}
                >
                  <ListItemIcon>
                    {/* <Dot size={32} color="#3c3939" weight="fill" /> */}
                    <Checkbox
                      checked={recipeInProgress.indexOf(`${item.ingredient} ${item.measure}`) !== -1}
                      name={ `${item.ingredient} ${item.measure}` }
                      id={ `${item.ingredient} ${item.measure}` }
                      disableRipple
                      inputProps={{ 'aria-labelledby': `checkbox - ${index}` }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={`checkbox - ${index}`}
                    primary={`${item.ingredient} ${item.measure}`}
                  />
                </ListItemButton>
              </ListItem>
            
            ))}
        </List>
      </Container>

      <Container maxWidth="sm">
        <h3>Instructions</h3>
        <DescriptionContainer maxWidth="sm">
          <p data-testid="instructions">{recipeDetails?.strInstructions}</p>
        </DescriptionContainer>
      </Container>

      <ButtonFixed
        type="button"
        onClick={ handleFinishRecipe }
        disabled={ recipeInProgress.length !== recipeDetails.ingredients.length }
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
