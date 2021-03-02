import styled from 'styled-components';
import { fontSizeSmall } from '../../../../ui/ui-fonts';
import Paragraph from '../../../Paragraph';

const ProductCategoryStyles = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${fontSizeSmall}rem;
`;

export default ProductCategoryStyles;