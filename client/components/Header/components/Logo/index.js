import React from 'react';

import LogoStyles from './styles';
import LogoImage from '../../../../ui/ui-logo/patagucci_1.png';

const Logo = () => (
  <LogoStyles href="#">
    <img src={LogoImage} alt="logo patagucci" />
  </LogoStyles>
);

export default Logo;
