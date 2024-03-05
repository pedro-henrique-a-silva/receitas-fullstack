import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Message from '../components/Message';
import Carousel from '../components/Carousel';
import { Dot } from '@phosphor-icons/react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { ButtonFixed, RecipeVideo } from './RecipeDetailsStyled';
import {
  isInProgress,
} from '../utils/utilsLocalStorage';
import RecipeCover from '../components/RecipeCover';
import FetchAPI from '../hooks/FetchAPI';
import { Ingredients } from '../types';

type RecipeDetailsProps = {
  mealOrDrink: 'meal' | 'drink';
};

function RecipeDetails(props: RecipeDetailsProps) {
  const { mealOrDrink } = props;
  const { recipeID } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState<any>({});

  const [isVisible, setIsVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { fetchDetails, fetchUpdateFavorites } = FetchAPI();

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleClickStartRecipe = () => {
    navigate(`/${mealOrDrink}/${recipeID}/progress`);
  };

  const handleFavoriteClick = async () => {
    const { message } = await fetchUpdateFavorites(recipeDetails.id)
    setFavorite(message)
  };

  const handleShareClick = () => {
    const { location: { origin, pathname } } = window;
    const url = `${origin}${pathname}`;
    navigator.clipboard.writeText(url);
    toggleIsVisible();
  };

  useEffect(() => {
    const getDetails = async () => {
      const details = await fetchDetails(mealOrDrink, recipeID);
      if (details) {
        setRecipeDetails(details);
        setFavorite(details.favorite);
      }
    };
    getDetails();
  }, [recipeID, mealOrDrink]);

  const inProgress = isInProgress(mealOrDrink, recipeID);

  if (Object.entries(recipeDetails).length === 0) return (<div>Loading...</div>);

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
            <ListItemButton>
              <ListItemIcon>
                <Dot size={32} color="#3c3939" weight="fill" />
              </ListItemIcon>
              <ListItemText
                primary={`${item.ingredient} ${item.measure}`}
              />
            </ListItemButton>
          </ListItem>
        
        ))}
      </List>
      </Container>
      
      <Container maxWidth="sm">
      <h3>Instructions</h3>
        <p data-testid="instructions">{recipeDetails?.strInstructions}</p>
      </Container>
      <Container maxWidth="sm">
      
      {mealOrDrink === 'meal' && (
        <RecipeVideo>
          <iframe
            title={ recipeDetails?.strName }
            src={ recipeDetails?.strYoutube.replace('watch?v=', 'embed/') }
            allowFullScreen
            data-testid="video"
          />
        </RecipeVideo>

      )}
      <Carousel mealOrDrink={ mealOrDrink } />
      </Container>
      <ButtonFixed
        type="button"
        onClick={ () => handleClickStartRecipe() }
        data-testid="start-recipe-btn"
        variant="contained"
        color="secondary"
      >
        {inProgress ? 'Continue Recipe' : 'Start Recipe'}
      </ButtonFixed>
    </>
  );
}
export default RecipeDetails;
