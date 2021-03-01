import React from 'react';
import ButtonStyles from './styles';

const Button = ({ name, handleOnClick }) => (
  <ButtonStyles data-test="component-button" onClick={handleOnClick}>
    {name}
  </ButtonStyles>
);

export default Button;
