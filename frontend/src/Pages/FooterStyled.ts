import { styled } from '@mui/system';

export const FooterWrapper = styled('footer')`
  display: flex;
  justify-content: space-between;
  bottom: 0;
  
  position: fixed;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 10%;
  }

  @media (min-width: 768px) {
    padding: 0 6rem;
    height: 11%;
  }
`;
