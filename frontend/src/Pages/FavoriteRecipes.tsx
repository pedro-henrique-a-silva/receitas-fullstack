import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Header from '../components/Header';
import Footer from './Footer';
import FetchAPI from '../hooks/FetchAPI';

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ShareNetwork, HeartStraight } from '@phosphor-icons/react';
import Avatar from '@mui/material/Avatar';
import {ListItemStyled, ButtonStyled, CardWrapper} from './FavoriteRecipesStyle';
import { Container } from '@mui/material';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<any[]>([]);
  const [filteredFavoriteRecipes, setFilteredFavoriteRecipes] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const {fetchFavorites, fetchUpdateFavorites} = FetchAPI()

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleFavoriteClick = async (recipeId: number) => {
    await fetchUpdateFavorites(recipeId)
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== recipeId))
  };

  const handleShareClick = (recipeData: any) => {
    const url = `http://localhost:3000/${recipeData.recipeType}s/${recipeData.id}`;
    navigator.clipboard.writeText(url);
    toggleIsVisible();
  };

  const handleFilter = (filter: string) => {
    setFilteredFavoriteRecipes(filter);
  };

  useEffect(() => {
    const getFavorites = async () => {
      const recipes = await fetchFavorites() || [];
      setFavoriteRecipes(recipes.favoriteRecipes);
    }
    
    getFavorites()
  }, []);

  const favoriteRecipesToRender = favoriteRecipes.filter((recipe) => {
    if (filteredFavoriteRecipes === '') return true;
    return recipe.recipeType === filteredFavoriteRecipes;
  });

  return (
    <>
      {(isVisible) && <Message toggleIsVisible={ toggleIsVisible } />}
      <Header title="Favorite Recipes" />
      <CardWrapper>
        <ButtonStyled
          onClick={ () => handleFilter('') }
          data-testid="filter-by-all-btn"
          type="button"
        >
          All

        </ButtonStyled>
        <ButtonStyled
          onClick={ () => handleFilter('meal') }
          data-testid="filter-by-meal-btn"
          type="button"
        >
          Food

        </ButtonStyled>
        <ButtonStyled
          onClick={ () => handleFilter('drink') }
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks

        </ButtonStyled>
      </CardWrapper>
      <Container maxWidth="sm">
      <List>
        {favoriteRecipesToRender.map((recipe, index) => (
          <ListItemStyled
            
            disablePadding
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
            secondaryAction={
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton onClick={() => handleShareClick(recipe.id)}  size="small">
                  <ShareNetwork />
                </IconButton>
                <IconButton onClick={() => handleFavoriteClick(recipe.id)} size="small">
                  <HeartStraight color="#f01a23" weight="fill" />
                </IconButton>
              </Stack>
            }
          >
            <ListItemButton>
              <ListItemAvatar>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <Avatar
                    data-testid={ `${index}-horizontal-image` }
                    src={ recipe.strThumb }
                    alt={ recipe.strName }
                    sx={{ width: 70, height: 70 }}
                  />
                </Link>
              </ListItemAvatar>
          
              <Stack ml={2} mr={2} direction="row" alignItems="center" spacing={1}>
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  {recipe.strName}
                </p>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`- ${recipe.strArea || recipe.strAlcoholic}`}
                </p>
              </Stack>
            </ListItemButton>
          </ListItemStyled>

        ))}
      </List>
      </Container>
      <Footer />
    </>
  );
}

export default FavoriteRecipes;

// caso a receita do card seja uma comida, ela apresente:
// foto da receita,
// nome,
// categoria,
// nacionalidade,
// botão de compartilhar
// botão de desfavoritar

// caso a receita do card seja uma bebida
// foto da receita
// nome
// se é alcoólica ou não
// botão de compartilhar
// botão de desfavoritar
