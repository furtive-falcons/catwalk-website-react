import React from 'react';
import ButtonStyles from "./styles";

const Button = ({ name, handleOnClick }) => {
  return (
    <ButtonStyles data-test="component-button" onClick={handleOnClick}>
      {name}
    </ButtonStyles>
  );
};

export default Button;
