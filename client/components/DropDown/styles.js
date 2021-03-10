import styled from 'styled-components';
import { colorWhite } from '../../ui/ui-colors';

const StyledSelect = styled.select`
  width: ${(props) => props.selectSize}%;
  margin-right: ${(props) => (props.hasMargins ? '1.5rem' : '0')};
  margin-bottom:1.5rem;
  border: 0.5rem;
  padding: 1rem;
  height: 5rem;
  background-color: #000;
  color: ${colorWhite};
  font-weight: bold;
`;

export default StyledSelect;
