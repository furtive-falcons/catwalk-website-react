import styled from 'styled-components';
import { colorWhite } from '../../ui/ui-colors';

const StyledSelect = styled.select`
  width: ${(props) => props.selectSize}%;
  margin-right:0.5rem;
  margin-bottom:0.5rem;
  border: 0.5rem;
  padding: 1rem;
  height: 5rem;
  background-color: #000;
  color: ${colorWhite};
  font-weight: bold;
`;

export default StyledSelect;
