import styled from 'styled-components';
import { fontSizeSmall } from '../../../../../../../../../../ui/ui-fonts';
import Paragraph from '../../../../../../../../../../components/Paragraph';

export const CategoryStyles = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: ${fontSizeSmall}rem;
  margin-bottom: 1rem;
`;