import styled from 'styled-components';
import { colorPrimary, colorGreen, colorWhite } from '../../ui/ui-colors';

export const ButtonStyles = styled.button`
  text-decoration: solid;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  cursor: pointer;
`;

export const Primary = styled(ButtonStyles)`
  width: ${(props) => props.size}rem;
  border-radius: 0;
`;

export const Secondary = styled(ButtonStyles)`
  width: ${(props) => props.size}rem;
  border-radius: 1rem;
  border: none;
  color: ${colorWhite};
  background: ${colorPrimary};
  :hover {
    background: ${colorGreen};
  }
`;
