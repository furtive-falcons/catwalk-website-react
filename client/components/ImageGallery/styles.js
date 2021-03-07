import styled from 'styled-components';
import { colorSecondary, colorWhite } from '../../ui/ui-colors';
import { fontSizeLarge, fontSizeLargePlus } from '../../ui/ui-fonts';

export const ImageGalleryWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const Slide = styled.div(({ image }) => ({
  height: '100%',
  width: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

export const Arrows = styled.div(() => ({
  position: 'absolute',
  top: '50%',
  display: 'flex',
  width: '91%',
  justifyContent: 'space-between',
  fontSize: `${fontSizeLargePlus}rem`,
  left: '8%',
}));

export const Pagination = styled.div(() => ({
  position: 'absolute',
  top: '1.5rem',
  left: '0.5rem',
}));

export const ExpandWrapper = styled.div(() => ({
  position: 'absolute',
  top: '10px',
  right: '15px',
  fontSize: `${fontSizeLarge}rem`,
}));

export const Thumbnail = styled.div(({ icon }) => ({
  height: '5rem',
  width: '5rem',
  backgroundImage: `url(${icon})`,
  cursor: 'pointer',
  backgroundSize: 'cover',
  border: `1px solid ${colorSecondary}`,
  marginTop: 5,
}));

export const IconStyles = styled.i``;

export const IconStylesWrapper = styled.i`
  padding: 0.2rem 1rem;
  background-color: white;
  border: 1px solid ${colorSecondary};
  &:hover {
    color: ${colorWhite};
    background-color: #000;
  }
`;

// const DivStyles = styled.div`
//   height: 60vh;
//   overflow: hidden;
//   border: solid 0.2rem ${colorSecondary};
//   position: relative;
//   .gallery-carousel {
//     &__img-container {
//       background-color: red;
//       height: 100%;
//       width: 100%;
//       position: relative;

//       &--list {
//         position: relative;
//         height: 100%;
//         width: 100%;
//         transition: transform 2s ease-in-out;

//         &__item {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;

//           & img {
//             height: 100%;
//             width: 100%;
//             object-fit: cover;
//           }
//         }
//       }
//     }
//     &__btn {
//       position: absolute;
//       top: 50%;
//       transform: translateY(-50%);
//       background: transparent;
//       border: none;
//       outline: none;
//       cursor: pointer;
//       z-index: 1;
//       &--right {
//         right: 0;
//       }
//     }
//     &__nav {
//       background-color: red;
//       position: absolute;
//       top: 0;
//     }
//     &__expand {
//       position: absolute;
//       top: 0;
//       right: 0;
//       background: transparent;
//       border: none;
//       outline: none;
//       cursor: pointer;
//       z-index: 1;
//     }
//   }
// `;

// export default DivStyles;
