import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Radio } from '@mui/material';
import { MEALS_API_BASE, DRINKS_API_BASE, fetchApi } from '../utils/fetchAPi';

const FIRST_LETTER_SEARCH_TYPE = 'First letter';

type SearchBarProps = {
  updateRecipes: (recipesData: any[]) => void;
};

function SearchBar(props: SearchBarProps) {
  const [searchType, setSearchType] = useState('Ingredient');
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const { updateRecipes } = props;

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value);
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const navigate: NavigateFunction = useNavigate();

  async function handleSearch(): Promise<void> {
    const isValid = validateSearch();

    if (!isValid) {
      return;
    }

    const apiEndpoint = buildApiEndpoint();

    try {
      const data = await fetchData(apiEndpoint);
      updateRecipes(data);

      if (data.length === 1) {
        const recipeId = data[0].idMeal || data[0].idDrink;
        redirectToRecipeDetails(recipeId);
      }
    } catch (error) {
      alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }

  function validateSearch(): boolean {
    if (searchType === FIRST_LETTER_SEARCH_TYPE && searchTerm.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
      return false;
    }
    return true;
  }

  function buildApiEndpoint(): string {
    let apiEndpoint = '';

    const isDrinksPage = window.location.pathname.includes('/drinks');

    switch (searchType) {
      case 'Ingredient':
        apiEndpoint = isDrinksPage ? DRINKS_API_BASE : MEALS_API_BASE;
        apiEndpoint += `filter.php?i=${searchTerm}`;
        break;
      case 'Name':
        apiEndpoint = isDrinksPage ? DRINKS_API_BASE : MEALS_API_BASE;
        apiEndpoint += `search.php?s=${searchTerm}`;
        break;
      case FIRST_LETTER_SEARCH_TYPE:
        if (searchTerm.length === 1) {
          apiEndpoint = isDrinksPage ? DRINKS_API_BASE : MEALS_API_BASE;
          apiEndpoint += `search.php?f=${searchTerm}`;
        }
        break;
      default:
        break;
    }

    return apiEndpoint;
  }

  async function fetchData(apiEndpoint: string): Promise<any[]> {
    return fetchApi(apiEndpoint);
  }

  function redirectToRecipeDetails(recipeId: string): void {
    const isDrinksPage = window.location.pathname.includes('/drinks');
    const routePrefix: 'drinks' | 'meals' = isDrinksPage ? 'drinks' : 'meals';
    navigate(`/${routePrefix}/${recipeId}`);
  }

  return (
    <Container>
      <TextField
        data-testid="search-input"
        type="text"
        placeholder="Digite sua busca..."
        value={ searchTerm }
        size="small"
        margin="dense"
        sx={ { mb: 2 } }
        onChange={ handleSearchTermChange }
        fullWidth
      />
      <div>
        <label htmlFor="search-type">
          <Radio
            data-testid="ingredient-search-radio"
            name="search-type"
            value="Ingredient"
            checked={ searchType === 'Ingredient' }
            onChange={ handleSearchTypeChange }
          />
          Ingredient
        </label>
        <label htmlFor="search-type">
          <Radio
            data-testid="name-search-radio"
            name="search-type"
            value="Name"
            checked={ searchType === 'Name' }
            onChange={ handleSearchTypeChange }
          />
          Name
        </label>
        <label htmlFor="search-type">
          <Radio
            data-testid="first-letter-search-radio"
            name="search-type"
            value="First letter"
            checked={ searchType === 'First letter' }
            onChange={ handleSearchTypeChange }
          />
          First letter
        </label>
      </div>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        data-testid="exec-search-btn"
        onClick={ () => handleSearch() }
        sx={ { mt: 2 } }
      >
        Search
      </Button>

    </Container>
  );
}

export default SearchBar;
