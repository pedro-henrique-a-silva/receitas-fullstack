import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DoneRecipeType } from '../types';
import Header from '../components/Header';
import Message from '../components/Message';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ShareNetwork } from '@phosphor-icons/react';
import Avatar from '@mui/material/Avatar';
import {ListItemStyled, ButtonStyled, CardWrapper, ListTextContent} from './DoneRecipesStyle';
import FetchAPI from '../hooks/FetchAPI';
import { Container } from '@mui/material';

function DoneRecipes() {
  const [recipesDone, setRecipesDone] = useState<DoneRecipeType[]>([]);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const filterTypes = ['All', 'Meal', 'Drink'];
  const { fetchDones } = FetchAPI()

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const dones = async () => {
      const recipes = await fetchDones() || [];
      setRecipesDone(recipes.doneRecipes);
    }
    
    dones()
  }, []);

  const filterRecipes = (type: string) => {
    setFilter(type);
  };

  const copyText = async (recipe: DoneRecipeType) => {
    const recipeUrl = `${window.location.origin}/${recipe.recipeType}s/${recipe.id}`;
    await navigator.clipboard.writeText(recipeUrl);
    toggleIsVisible();
  };


  const renderTopText = (recipe: DoneRecipeType) => {
    console.log(recipe);
    
    if (recipe.recipeType === 'meal') {
      return `${recipe.strArea} - ${recipe.categoryName}`;
    }
    return recipe.strAlcoholic;
  };

  if (recipesDone.length === 0) return <div>Loading...</div>

  return (
    <>
      {(isVisible) && <Message toggleIsVisible={ toggleIsVisible } />}
      <Header title="Done Recipes" />

      <div>
        <CardWrapper>
          {filterTypes.map((type) => (
            <ButtonStyled
              key={ type }
              onClick={ () => filterRecipes(type.toLowerCase()) }
              data-testid={ `filter-by-${type.toLowerCase()}-btn` }
            >
              {type}
            </ButtonStyled>
          ))}
        </CardWrapper>
        
        <Container maxWidth="sm">
        <List>
          {recipesDone
            .filter((recipe: DoneRecipeType) => filter === 'all' || recipe.recipeType === filter)
            .map((recipe: DoneRecipeType, index: number) => (
              <ListItemStyled
                disablePadding
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
                secondaryAction={
                  <IconButton aria-label="comment" onClick={ () => copyText(recipe)}>
                    <ShareNetwork />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Link to={ `/${recipe.recipeType}s/${recipe.id}` }>
                      <Avatar
                        data-testid={ `${index}-horizontal-image` }
                        src={ recipe.strThumb }
                        alt={ recipe.strName }
                        sx={{ width: 70, height: 70 }}
                      />
                    </Link>
                  </ListItemAvatar>
                  <ListTextContent>
                    <p data-testid={ `${index}-horizontal-name` }>{recipe.strName}</p>
                    <p data-testid={ `${index}-horizontal-top-text` }>
                      {renderTopText(recipe)}
                    </p>
                    {/* <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p> */}
                    <p>
                      {/* {(recipe.strTags) && recipe.strTags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={ tagIndex }
                          data-testid={ `${index}-${tag}-horizontal-tag` }
                        >
                          {tag}
                        </span>
                      ))} */}
                    </p>
                  </ListTextContent>
                </ListItemButton>
              </ListItemStyled>
              
            ))}
        </List>
        </Container>
      </div>
    </>
  );
}

export default DoneRecipes;
