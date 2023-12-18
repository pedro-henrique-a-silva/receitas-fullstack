import { styled } from '@mui/system';

export const RecipeCoverWrapper = styled('section')`
  align-items: center;
  display: flex;
  height: 200px;
  color: #DC272F;
  font-size: 1.2rem;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    filter: blur(10px);
  }

  & img{
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  & h3 {
    left: 10px;
    position: absolute;
    top: 10px;
    z-index: 100;
    margin: 0;
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
    -webkit-text-stroke: 1px #f01a23;
  }

  & h1 {
    z-index: 100;
    -webkit-text-stroke: 1px #f01a23;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    /* text-stroke: 2px red; */
  }
`;

export const SocialButtons = styled('div')`
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 100;

  & button {
    background: transparent;
    border: none;
    z-index: 100;
  }

  & button svg {
    color: #f01a23;
  }
`;
