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
  width: ${(props) => props.size};
  border-radius: 0;
  display: inline-flex;
  justify-content: ${(props) => (props.isContentCentered ? 'center' : 'space-around')};
  padding: 5px;
  align-items: center;
  height: 50px;
  height: 50px;
  border: 0;
  background: #000;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
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
  :active {
    transform: scale(0.95);
  }
`;
