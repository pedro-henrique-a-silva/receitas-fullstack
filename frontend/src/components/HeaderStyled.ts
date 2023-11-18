import { styled } from '@mui/system';

export const HeaderWrapper = styled('header')`
  display: flex;
  background-color: #2E2819;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapper = styled('div')`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;

  & svg {
    font-size: 3rem;
    line-height: 0;
  }

  & > button svg {
    color: #f2e8e8;
  }
`;

export const SearchButton = styled('button')`
    border: none;
    background-color: transparent;
`;
