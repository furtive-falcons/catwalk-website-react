import styled from 'styled-components';
import { fontSizeSmall } from '../../../../ui/ui-fonts';
import Paragraph from '../../../Paragraph';

export const ProductCategoryStyles = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${fontSizeSmall}rem;
  margin-top: 1rem;
`;

export const ReviewsLine = styled.div`
  display: flex;
`;

export const SocialWrapper = styled.a`
  background: black;
  color: white;
  width: 3rem;
  height: 3rem;
  display: inline-block;
  text-align: center;
  line-height: 3rem;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  &:hover {
    opacity: 0.7;
  }
`;
