import { Container, Card } from '@mui/material';
import { styled } from '@mui/system';

export const ContainerStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  gap: 1rem;
`;

export const CardRecipeStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  width: 300px;

  & img {
    position: relative;
  }

  & img:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
  }
`;
