import styled from 'styled-components';
import { colorSecondary } from '../../ui/ui-colors';

const DivStyles = styled.div`
  height: 60vh;
  overflow: hidden;
  border: solid 0.2rem ${colorSecondary};
  position: relative;
  .gallery-carousel {
    &__img-container {
      background-color: red;
      height: 100%;
      width: 100%;
      position: relative;

      &--list {
        position: relative;
        height: 100%;
        width: 100%;
        transition: transform 2s ease-in-out;

        &__item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          & img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    &__btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 1;
      &--right {
        right: 0;
      }
    }
    &__nav {
      background-color: red;
      position: absolute;
      top: 0;
    }
  }
`;

export default DivStyles;
