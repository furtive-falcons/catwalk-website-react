import styled from 'styled-components';
import { colorBlack, colorSecondary, colorWhite } from '../../ui/ui-colors';
import { fontSizeLarge, fontSizeLargePlus } from '../../ui/ui-fonts';

export const ImageGalleryWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colorWhite};
  height: 100%;
  z-index: 1;
  &:hover .thumbnail {
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
  cursor: 'zoom-in',
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

export const Thumbnail = styled.div(({ icon, isActive }) => ({
  height: '5rem',
  width: '0',
  backgroundImage: `url(${icon})`,
  cursor: 'pointer',
  backgroundSize: 'cover',
  borderLeftColor: '#000',
  borderLeftStyle: 'solid',
  borderLeftWidth: isActive ? 'thick' : '2px',
  backgroundColor: colorBlack,
  marginTop: 5,
  opacity: 0.7,
  transition: 'all .21s linear',
  ':hover': {
    opacity: 1,
  },
}));
export const IconStyles = styled.i``;

export const IconStylesWrapper = styled.i`
  padding: 0.2rem 1rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid ${colorSecondary};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  &:hover {
    color: ${colorWhite};
    background-color: #000;
  }
`;
