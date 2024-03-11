import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Stack, TextField, Button, Fade } from '@mui/material';
import { CookingPot } from '@phosphor-icons/react';
import { MainLogin, LoginWrapper } from './LoginStyle';
import { LoginType, RegisterType } from '../types';

const LOGIN_INITIAL_STATE = {
  email: '',
  password: '',
};

const REGISTER_INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

function Login() {
  const [loginUser, setLoginUser] = useState<LoginType>(LOGIN_INITIAL_STATE);
  const [registerUser, setRegisterUser] = useState<RegisterType>(REGISTER_INITIAL_STATE);
  const [isLogin, setIsLogin] = useState(true);
  const [formError, setFormError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleChangeRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const passwordLength = loginUser.password.length;
    const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;

    if (passwordLength < 6) {
      return false;
    }
    return regexEmail.test(loginUser.email);
  };

  const validateFormRegister = (): boolean => {
    const passwordLength = registerUser.password.length;
    const nameLength = registerUser.name.length;
    const regexEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;

    if (passwordLength < 7 || nameLength < 5) {
      return false;
    }

    return regexEmail.test(registerUser.email);
  };

  const changeSignIn = () => {
    setIsLogin((prev) => !prev)
  }

  const signUp = async () => {
    const postData = {
      name: registerUser.name,
      username: registerUser.email,
      password: registerUser.password
    };
 
    const requestOptions = {
       method: 'POST',  
       headers: {
         'Content-Type': 'application/json', 
       },
       body: JSON.stringify(postData)
    };
 
    const signUpResponse = await fetch('http://localhost:3001/user/signup', requestOptions);

    if (signUpResponse.status === 201) {
      changeSignIn()
      setFormError(false)
      setRegisterUser(REGISTER_INITIAL_STATE)
      return
    }

    setLoginUser(REGISTER_INITIAL_STATE)
    setFormError(true)
  }

  const navigate = useNavigate();
  const toMealsAfterClick = () => navigate('/meal');

  const setUserLocalStorage = () => localStorage
    .setItem('user', JSON.stringify({ email: loginUser.email }));

  const setJwtLocalStorage = (token: string) => localStorage
    .setItem('token', token);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData = {
     username: loginUser.email,
     password: loginUser.password
    };

    const requestOptions = {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(postData)
    };

    const loginResponse = await fetch('http://localhost:3001/user/login', requestOptions);
    const loginReponseJson = await loginResponse.json()

    if (loginResponse.status === 200) {
      setJwtLocalStorage(loginReponseJson.token)
      setUserLocalStorage();
      toMealsAfterClick();
      setLoginUser(LOGIN_INITIAL_STATE)
      return
    };

    setLoginUser(LOGIN_INITIAL_STATE)
    setFormError(true)
    
  };

  return (
    <MainLogin>
      <Fade in appear>
        <LoginWrapper elevation={ 5 }>
          <CookingPot size={ 80 } color="#2E2819" weight="fill" />

          {(isLogin) 
          ?
            (<form
              onSubmit={ onSubmit }
            >
              <TextField
                error={formError}
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
                error={formError}
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
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  data-testid="login-submit-btn"
                  disabled={ !validateForm() }
                  type="submit"
                  color="secondary"
                >
                  Entrar
                </Button>

                <Button
                  variant="text"
                  data-testid="register-change-btn"
                  type="button"
                  color="secondary"
                  onClick={changeSignIn}
                >
                  inscrever-se
                </Button>
              </Stack>
            </form>)
          : (<form
            onSubmit={ onSubmit }
          >
            <TextField
              label="Nome"
              variant="outlined"
              data-testid="name-input"
              type="text"
              id="name"
              name="name"
              value={ registerUser.name }
              onChange={ handleChangeRegister }
              size="small"
              margin="dense"
              sx={ { mb: 2 } }
              autoComplete="off"
            />

            <TextField
              label="Email"
              variant="outlined"
              data-testid="email-input"
              type="text"
              id="email"
              name="email"
              value={ registerUser.email }
              onChange={ handleChangeRegister }
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
              value={ registerUser.password }
              onChange={ handleChangeRegister }
              size="small"
              margin="dense"
              sx={ { mb: 2 } }
            />
            <Stack spacing={2}>
              <Button
                variant="contained"
                data-testid="login-submit-btn"
                disabled={ !validateFormRegister() }
                type="button"
                onClick={signUp}
                color="secondary"
              >
                Inscrever-se
              </Button>
              <Button
                  variant="text"
                  data-testid="login-change-btn"
                  type="button"
                  color="secondary"
                  onClick={changeSignIn}
                >
                  Ja tenho uma conta.
                </Button>

            </Stack>
          </form>)
          }
          
        </LoginWrapper>
      </Fade>
    </MainLogin>
  );
}

export default Login;
