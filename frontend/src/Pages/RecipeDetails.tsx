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
  isFavorite,
  isInProgress,
} from '../utils/utilsLocalStorage';
import { fetchDetails } from '../utils/fetchAPi';
import RecipeCover from '../components/RecipeCover';

type RecipeDetailsProps = {
  mealOrDrink: 'meals' | 'drinks';
};

function RecipeDetails(props: RecipeDetailsProps) {
  const { mealOrDrink } = props;
  const { recipeID } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState<any>({});

  const [isVisible, setIsVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const getIngredients = () => Object
    .entries(recipeDetails)
    .filter(([key, value]) => key.includes('strIngredient') && value)
    .map((values, index) => (`${values[1]} ${recipeDetails[`strMeasure${index + 1}`]
    || ''}`));

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleClickStartRecipe = () => {
    navigate(`/${mealOrDrink}/${recipeID}/in-progress`);
  };

  const handleFavoriteClick = (recipeData: any) => {
    const id = recipeData.id;
    const type = mealOrDrink.replace('s', '');
    const nationality = recipeData.strArea || '';
    const category = recipeData.strCategory;
    const alcoholicOrNot = recipeData.strAlcoholic || '';
    const name = recipeData.strName;
    const image = recipeData.strThumb;

    const newFavoriteRecipe = {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
    };

    const recipesLocalStorage = JSON
      .parse(localStorage.getItem('favoriteRecipes') as string)
    || [];

    if (isFavorite(recipeID)) {
      const newFavoriteRecipes = recipesLocalStorage
        .filter((recipe: any) => recipe.id !== recipeID);

      localStorage.setItem('favoriteRecipes', JSON
        .stringify(newFavoriteRecipes));

      setFavorite(false);
    } else {
      localStorage.setItem('favoriteRecipes', JSON
        .stringify([...recipesLocalStorage, newFavoriteRecipe]));

      setFavorite(true);
    }
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
      }
    };
    getDetails();
    const fav = isFavorite(recipeID);
    console.log(fav);
    setFavorite(fav);
  }, [recipeID, mealOrDrink]);

  const inProgress = isInProgress(mealOrDrink, recipeID);

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

    "<h3>Ingredients</h3>
    <List >
      {getIngredients().map((ingredient, index) => (
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
                primary={ingredient as string}
              />
            </ListItemButton>
          </ListItem>
        
        ))}
      </List>
      
      <h3>Instructions</h3>
      <Container maxWidth="sm">
        <p data-testid="instructions">{recipeDetails?.strInstructions}</p>
      </Container>
      {mealOrDrink === 'meals' && (
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
