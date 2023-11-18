import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const ButtonFixed = styled(Button)`
  bottom: 0;
  font-size: 1.2rem;
  font-weight: 700;
  left: 50%;
  padding: 0.5rem;
  position: fixed;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%);
`;

export const RecipeVideo = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  & iframe {
  height: 300px;
  width: 90%;
  }
`;