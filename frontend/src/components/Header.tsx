import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { User, CookingPot } from '@phosphor-icons/react';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';
import RecipesContext from '../context/contextRecipes';
import { HeaderWrapper, MenuWrapper, SearchButton } from './HeaderStyled';

type HeaderProp = {
  title: string;
};

function Header(props: HeaderProp) {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const { title } = props;

  const { updateRecipes } = useContext(RecipesContext);

  const rotasSemHeader = ['Profile', 'Done Recipes', 'Favorite Recipes'];

  const renderTitle = () => {
    const isNotMealOrDrinkTitle = rotasSemHeader
      .some((rota) => title.toLowerCase() === rota.toLowerCase())

    if (isNotMealOrDrinkTitle) {
      return title;
    }

    return title === 'Meals' ? 'Comidas' : 'Bebidas'
  }
 
  return (
    <>
      <HeaderWrapper>
        <div>
          <CookingPot size={ 56 } color="#f2e8e8" weight="fill" />
        </div>
        {/* <h1>RECIPES app</h1> */}
        <MenuWrapper>
          {
          (!rotasSemHeader.some((rota) => rota === title.toLowerCase()))
          && (
            <SearchButton
              onClick={ () => setToggleSearchBar(!toggleSearchBar) }
            >
              <SearchIcon
                data-testid="search-top-btn"
              />
            </SearchButton>
          )
          }
          <NavLink to="/profile">
            <User
              data-testid="profile-top-btn"
              color="#f2e8e8"
              weight="fill"
            />
          </NavLink>
        </MenuWrapper>
      </HeaderWrapper>
      {(toggleSearchBar)
      && <SearchBar updateRecipes={ updateRecipes! } />}
      <Typography mt={ 2 } mb={ 4 } variant="h4" align="center">
        {renderTitle()}
      </Typography>
    </>
  );
}

export default Header;
