import styled from 'styled-components';
import { colorBlack, colorSecondary } from '../../../../ui/ui-colors';

export const IconStyle = styled.div(({ icon }) => ({
  height: '6rem',
  width: '6rem',
  backgroundImage: `url(${icon})`,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundSize: 'cover',
  border: `1px solid ${colorBlack}`,
  ':hover': {
    boxShadow: `0 0 0 0.5pt ${colorBlack}`,
  },
}));

export const IconStyleWrapper = styled.div(() => ({
  width: '21%',
  position: 'relative',
  zIndex: '0',
}));

export const IconWrapper = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #000;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 9999;
  left: 4.3rem;
  text-align: center;
`;
