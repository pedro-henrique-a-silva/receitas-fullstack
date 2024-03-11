import { Container, Card } from '@mui/material';
import { styled } from '@mui/system';

export const ContainerStyle = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const CardRecipeStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;

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

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 200px;
  }
`;
