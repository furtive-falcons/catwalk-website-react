import React from 'react';

const RightButton = () => {
  const handleOnClick = () => {
    console.log('Right button was clicked');
  };

  return (
    <button className="right-prev-button" type="button" lable="right" onClick={handleOnClick}>
      <i className="fas fa-chevron-right" />
    </button>
  );
};

export default RightButton;
