import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const MainLogin = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  
`;

export const LoginWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  & form {
    display: flex;
    flex-direction: column;
  }
`;
