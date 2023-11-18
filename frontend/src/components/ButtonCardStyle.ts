import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const ButtonStyled = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.main};
`;

export const CardWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;
