import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

const slideUp = keyframes`
  from {
    top:500px;
    opacity: 0%;
  }
  to {
    top:0;
    opacity: 100%;
  }
`;

const expand = keyframes`
  from {
    opacity: 0%;
    max-height: 0px;
  }
  to {
    opacity: 100%;
    max-height: 35px;
  }
`;

export {fadeIn, expand, slideUp};