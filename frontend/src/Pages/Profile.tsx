import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from './Footer';
import {CardWrapper, ButtonStyled} from './ProfileStyle';
import Typography from '@mui/material/Typography';

function Profile() {
  const rawEmaildata = localStorage.getItem('user');
  const emailUser = (rawEmaildata) ? JSON.parse(rawEmaildata).email : '';
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/done-recipes');
  };

  const handleClickFavorite = () => {
    navigate('/favorite-recipes');
  };

  const handleClickLogout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <>
      <Header title="Profile" />
      <Typography mb={2} variant="h5" component="h2" align='center'>
        {emailUser}
      </Typography>
      <CardWrapper>
        <ButtonStyled
          type="button"
          data-testid="profile-done-btn"
          onClick={ handleClick }
        >
          Done Recipes
        </ButtonStyled>
        <ButtonStyled
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ handleClickFavorite }
        >
          Favorite Recipes
        </ButtonStyled>
        <ButtonStyled
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClickLogout }
        >
          Logout
        </ButtonStyled>

      </CardWrapper>
      <Footer />
    </>
  );
}

export default Profile;
