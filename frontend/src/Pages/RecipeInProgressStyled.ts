import { Button } from '@mui/material';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';


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

export const DescriptionContainer = styled(Container)`
  margin-bottom: 4rem;
`