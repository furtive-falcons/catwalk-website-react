import styled from 'styled-components';
import { fontSizeBaseLow } from '../../ui/ui-fonts';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  padding-left: 1rem;
  li {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: ${fontSizeBaseLow}rem;
  }
`;

export default StyledList;
