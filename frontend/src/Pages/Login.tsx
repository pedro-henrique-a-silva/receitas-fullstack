import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Fade } from '@mui/material';
import { CookingPot } from '@phosphor-icons/react';
import { MainLogin, LoginWrapper } from './LoginStyle';
import { LoginType } from '../types';

const LOGIN_INITIAL_STATE = {
  email: '',
  password: '',
};

function Login() {
  const [loginUser, setLoginUser] = useState<LoginType>(LOGIN_INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const passwordLength = loginUser.password.length;
    const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;

    if (passwordLength < 7) {
      return false;
    }
    return regexEmail.test(loginUser.email);
  };

  const navigate = useNavigate();
  const toMealsAfterClick = () => navigate('/meals');

  const setUserLocalStorage = () => localStorage
    .setItem('user', JSON.stringify({ email: loginUser.email }));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserLocalStorage();
    toMealsAfterClick();
  };

  return (
    <MainLogin>
      <Fade in appear>
        <LoginWrapper elevation={ 5 }>
          <CookingPot size={ 80 } color="#2E2819" weight="fill" />
          <form
            onSubmit={ onSubmit }
          >
            <TextField
              label="Email"
              variant="outlined"
              data-testid="email-input"
              type="text"
              id="email"
              name="email"
              value={ loginUser.email }
              onChange={ handleChange }
              size="small"
              margin="dense"
              sx={ { mb: 2 } }
              autoComplete="off"
            />

            <TextField
              label="Senha"
              variant="outlined"
              data-testid="password-input"
              type="password"
              id="password"
              name="password"
              value={ loginUser.password }
              onChange={ handleChange }
              size="small"
              margin="dense"
              sx={ { mb: 2 } }
            />

            <Button
              variant="contained"
              data-testid="login-submit-btn"
              disabled={ !validateForm() }
              type="submit"
              color="secondary"
            >
              Enter
            </Button>
          </form>
        </LoginWrapper>
      </Fade>
    </MainLogin>
  );
}

export default Login;
