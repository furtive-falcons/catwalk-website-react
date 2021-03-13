import styled from 'styled-components';

import { colorGreyLight1 } from '../../../../ui/ui-colors';
import { fontSizeLarger } from '../../../../ui/ui-fonts';

const LogoStyles = styled.a`
  color: ${colorGreyLight1};
  font-size: ${fontSizeLarger}rem;
  font-weight: 700;
  img {
    width: 50%;
    height: 50%;
  }
`;

export default LogoStyles;
