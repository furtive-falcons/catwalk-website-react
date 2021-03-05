import { bool, func, string } from 'prop-types';
import React from 'react';
import { IconStyle, IconStyleWrapper, IconWrapper } from './styles';

const renderIsSelectedIcon = (isSelected) => {
  if (!isSelected) return null;

  return (
    <IconWrapper>
      <i className="fas fa-check" />
    </IconWrapper>
  );
};

const StyleIcon = ({ handleOnClick, thumbnail, isSelected }) => (
  <IconStyleWrapper>
    {renderIsSelectedIcon(isSelected)}
    <IconStyle onClick={handleOnClick} icon={thumbnail} />
  </IconStyleWrapper>
);

StyleIcon.propTypes = {
  handleOnClick: func,
  thumbnail: string,
  isSelected: bool,
};

StyleIcon.defaultProps = {
  handleOnClick: Function.prototype,
  thumbnail: null,
  isSelected: false,
};

export default StyleIcon;
