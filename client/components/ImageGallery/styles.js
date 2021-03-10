import styled from 'styled-components';
import { colorSecondary, colorWhite } from '../../ui/ui-colors';
import { fontSizeLarge, fontSizeLargePlus } from '../../ui/ui-fonts';

export const ImageGalleryWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colorWhite};
  height: 100%;
  z-index: 1;
  &:hover .thumbnail{ 
      width: 5rem;
  }
`;

export const Slide = styled.div(({ image, position }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  transition: 'all 0.3s linear',
  transform: `translateX(${position})`,
  opacity: position === '0' ? '1' : '0',

}));

export const Arrows = styled.div(() => ({
  position: 'absolute',
  top: '50%',
  display: 'flex',
  width: '89%',
  justifyContent: 'space-between',
  fontSize: `${fontSizeLargePlus}rem`,
  left: '10%',
}));

export const Pagination = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0.8rem;
`;

export const ExpandWrapper = styled.div(() => ({
  position: 'absolute',
  top: '10px',
  right: '15px',
  fontSize: `${fontSizeLarge}rem`,
}));

export const Thumbnail = styled.div(({ icon , isActive }) => ({
  height: '5rem',
  width: '0',
  backgroundImage: `url(${icon})`,
  cursor: 'pointer',
  backgroundSize: 'cover',
  borderLeftColor: '#000',
  borderLeftStyle: 'solid',
  borderLeftWidth: isActive ? 'thick' : '2px',
  marginTop: 5,
  transition: 'all .21s linear',
}));

export const IconStyles = styled.i``;

export const IconStylesWrapper = styled.i`
  padding: 0.2rem 1rem;
  background-color: white;
  border: 1px solid ${colorSecondary};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
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
