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
        src={ recipeDetails?.strThumb}
        alt="recipeThumb"
      />
      <h1
        data-testid="recipe-title"
      >
        {recipeDetails?.strName}

      </h1>
      <h3
        data-testid="recipe-category"
      >
        {
         recipeDetails?.category.categoryName
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
          ? <HeartStraight data-testid="favorite-btn" size={32} weight="fill"/>
          : <HeartStraight data-testid="favorite-btn" size={32} />
          }
          
        </button>
      </SocialButtons>
    </RecipeCoverWrapper>
  );
}

export default RecipeCover;
