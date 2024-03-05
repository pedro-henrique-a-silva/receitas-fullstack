import { styled } from '@mui/system';

export const HeaderWrapper = styled('header')`
  display: flex;
  background-color: #2E2819;
  
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    padding: 1rem 6rem;
  }
`;

export const MenuWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    font-size: 3rem;
    line-height: 0;
  }

  & > button svg {
    color: #f2e8e8;
  }

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const SearchButton = styled('button')`
    border: none;
    background-color: transparent;
`;
