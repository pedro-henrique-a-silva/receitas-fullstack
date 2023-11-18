import { useNavigate } from 'react-router-dom';
import { Wine, ForkKnife } from '@phosphor-icons/react';
import { Fab } from '@mui/material';
import { FooterWrapper } from './FooterStyled';

function Footer() {
  const navigate = useNavigate();
  const toDrinks = () => navigate('/drinks');
  const toMeals = () => navigate('/meals');
  return (
    <FooterWrapper data-testid="footer">
      <Fab color="secondary" aria-label="add">
        <Wine
          onClick={ toDrinks }
          size={ 40 }
          color="#fefefe"
          weight="fill"
          data-testid="drinks-bottom-btn"
        />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <ForkKnife
          onClick={ toMeals }
          size={ 40 }
          color="#fefefe"
          weight="fill"
          data-testid="meals-bottom-btn"
        />
      </Fab>
    </FooterWrapper>
  );
}

export default Footer;
