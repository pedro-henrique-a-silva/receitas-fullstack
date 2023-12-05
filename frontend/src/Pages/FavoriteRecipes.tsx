import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './FavoriteRecipes.module.css';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Message from '../components/Message';
import Header from '../components/Header';
import Footer from './Footer';

import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ShareNetwork, HeartStraight } from '@phosphor-icons/react';
import Avatar from '@mui/material/Avatar';
import {ListItemStyled, ButtonStyled, CardWrapper} from './FavoriteRecipesStyle';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<any[]>([]);
  const [filteredFavoriteRecipes, setFilteredFavoriteRecipes] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleFavoriteClick = (recipeData: any) => {
    const newFavoriteRecipes = favoriteRecipes
      .filter((recipe: any) => recipe.id !== recipeData.id);

    localStorage.setItem('favoriteRecipes', JSON
      .stringify(newFavoriteRecipes));
    setFavoriteRecipes(newFavoriteRecipes);
  };

  const handleShareClick = (recipeData: any) => {
    const url = `http://localhost:3000/${recipeData.type}s/${recipeData.id}`;
    navigator.clipboard.writeText(url);
    toggleIsVisible();
  };

  const handleFilter = (filter: string) => {
    setFilteredFavoriteRecipes(filter);
  };

  useEffect(() => {
    const favoriteRecipesFromLocalStorage = JSON
      .parse(localStorage.getItem('favoriteRecipes') as string) || [];
    setFavoriteRecipes(favoriteRecipesFromLocalStorage);
  }, []);

  const favoriteRecipesToRender = favoriteRecipes.filter((recipe) => {
    if (filteredFavoriteRecipes === '') return true;
    return recipe.type === filteredFavoriteRecipes;
  });

  // if (favoriteRecipesToRender.length === 0) return (<div>Loading...</div>);

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
      <List>
        {favoriteRecipesToRender.map((recipe, index) => (
          <ListItemStyled
            disablePadding
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
            secondaryAction={
              //  onClick={ () => copyText(recipe)}
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton  size="small">
                  <ShareNetwork />
                </IconButton>
                <IconButton size="small">
                  <HeartStraight />

                </IconButton>
              </Stack>
            }
          >
            <ListItemButton>
              <ListItemAvatar>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <Avatar
                    data-testid={ `${index}-horizontal-image` }
                    src={ recipe.image }
                    alt={ recipe.name }
                    sx={{ width: 70, height: 70 }}
                  />
                </Link>
              </ListItemAvatar>
              {/* <Link to={ `/${recipe.type}s/${recipe.id}` }> */}
              {/* </Link> */}
              <Stack ml={2} mr={2} direction="row" alignItems="center" spacing={1}>
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  {recipe.name}
                </p>
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`- ${recipe.nationality || recipe.alcoholicOrNot}`}
                </p>
              </Stack>
            </ListItemButton>
          </ListItemStyled>

        ))}
      </List>
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
