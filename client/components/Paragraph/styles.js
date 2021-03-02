import styled from 'styled-components';
import { fontSizeSmaller } from '../../ui/ui-fonts';

const ParagraphStyles = styled.p`
  font-size: ${props => props.size}rem;
`;

export default ParagraphStyles;
