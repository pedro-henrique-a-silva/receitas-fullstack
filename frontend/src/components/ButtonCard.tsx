import { ButtonStyled, CardWrapper } from './ButtonCardStyle';

type ButtonCardProps = {
  onCategorySelected: (category: string) => void;
  categories: any[];
};

function ButtonCard({ onCategorySelected, categories }: ButtonCardProps) {
  const handleClearFilter = () => {
    onCategorySelected('');
  };

  return (
    <CardWrapper>
      {categories.map((category, index) => (
        <ButtonStyled
          key={ index }
          size="small"
          variant="outlined"
          data-testid={ `${category.categoryName}-category-filter` }
          onClick={ () => onCategorySelected(category.categoryName) }
        >
          {category.categoryName}
        </ButtonStyled>
      ))}
      <ButtonStyled
        data-testid="All-category-filter"
        size="small"
        variant="outlined"
        onClick={ handleClearFilter }
      >
        All
      </ButtonStyled>
    </CardWrapper>
  );
}

export default ButtonCard;
