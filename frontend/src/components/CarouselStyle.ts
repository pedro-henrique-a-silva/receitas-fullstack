import { styled } from '@mui/system';

export const Container = styled('div')`
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
  z-index: -1;

  & div.swiper-wrapper div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & img {
    width: 80%;
  }
`