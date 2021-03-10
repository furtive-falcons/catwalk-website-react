import styled from 'styled-components';
import { fontSizeSmall } from '../../../../ui/ui-fonts';
import Paragraph from '../../../Paragraph';

export const ProductCategoryStyles = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${fontSizeSmall}rem;
`;

export const ReviewsLine = styled.div`
  display: flex;
`;

export const SocialWrapper = styled.i`
  i {
    width: 5rem;
    height: 5rem;
  }
`;
