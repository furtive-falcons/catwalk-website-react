import {
  bool, func, number, string,
} from 'prop-types';
import React from 'react';
import { ButtonStyles, Primary, Secondary } from './styles';

const renderButtonContent = (icon, name) => (
  <>
    {name}
    {icon && <i className={`fas fa-${icon}`} />}
  </>
);

const Button = ({
  size, name, primary, icon, handleOnClick, secondary, type
}) => {
  if (primary) {
    return (
      <Primary type={type} size={size} data-test="component-button" onClick={handleOnClick}>
        {renderButtonContent(icon, name)}
      </Primary>
    );
  }
  if (secondary) {
    return (
      <Secondary type={type} size={size} data-test="component-button" onClick={handleOnClick}>{renderButtonContent(icon, name)}</Secondary>
    );
  }

  return (
    <ButtonStyles
      size={size}
      data-test="component-button"
      onClick={handleOnClick}
    >
      {renderButtonContent(icon, name)}
    </ButtonStyles>
  );
};

Button.propTypes = {
  size: number,
  primary: bool,
  name: string,
  handleOnClick: func,
  icon: string,
};

Button.defaultProps = {
  size: null,
  primary: false,
  name: '',
  handleOnClick: Function.prototype,
  icon: null,
};

export default Button;
