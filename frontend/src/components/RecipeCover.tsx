import { ShareNetwork, HeartStraight } from '@phosphor-icons/react';
import { RecipeCoverWrapper, SocialButtons } from './RecipeCoverStyled';

type RecipeCoverProps = {
  mealOrDrink: 'meals' | 'drinks';
  recipeDetails: any;
  favorite: boolean;
  handleShareClick: () => void;
  handleFavoriteClick: (recipeData: any) => void;
};

function RecipeCover(props: RecipeCoverProps) {
  const {
    mealOrDrink,
    recipeDetails,
    favorite,
    handleShareClick,
    handleFavoriteClick } = props;

  return (
    <RecipeCoverWrapper>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails?.strMealThumb || recipeDetails?.strDrinkThumb }
        alt="recipeThumb"
      />
      <h1
        data-testid="recipe-title"
      >
        {recipeDetails?.strMeal || recipeDetails?.strDrink}

      </h1>
      <h3
        data-testid="recipe-category"
      >
        {
          (mealOrDrink === 'meals')
            ? recipeDetails?.strCategory
            : recipeDetails?.strAlcoholic
          }

      </h3>
      <SocialButtons>
        <button
          data-testid="share-btn"
          onClick={ handleShareClick }
        >
          <ShareNetwork size={32} />
        </button>
        <button
          onClick={ () => handleFavoriteClick(recipeDetails) }
        >
          {favorite 
          ? <HeartStraight data-testid="favorite-btn" size={32}/>
          : <HeartStraight data-testid="favorite-btn" size={32} weight="fill"/>
          }
          
        </button>
      </SocialButtons>
    </RecipeCoverWrapper>
  );
}

export default RecipeCover;
