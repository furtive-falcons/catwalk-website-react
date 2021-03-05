import styled from 'styled-components';
import { colorSecondary } from '../../../../ui/ui-colors';

export const IconStyle = styled.div(({ icon }) => ({
  height: '5rem',
  width: '5rem',
  backgroundImage: `url(${icon})`,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundSize: 'cover',
  border: `1px solid ${colorSecondary}`,
}));

export const IconStyleWrapper = styled.div(() => ({
  // flex: '1 0 21%'
  width: '21%',
  position: 'relative',
}));

export const IconWrapper = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #000;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 9999;
  right: 0.9rem;
  text-align: center;
`;
