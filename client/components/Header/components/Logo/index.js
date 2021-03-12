import React from 'react';

import LogoStyles from './styles';
import LogoImage from '../../../../ui/ui-logo/patagucci_1.png'

const Logo = () => (
  <LogoStyles data-test="component-logo" href="#">
    <img src={LogoImage} alt="logo"/>
  </LogoStyles>
);

export default Logo;
