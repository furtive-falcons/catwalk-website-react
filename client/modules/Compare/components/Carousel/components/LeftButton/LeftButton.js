import React from 'react';

const LeftButton = () => {
  const handleOnClick = () => {
    console.log('Left button was clicked');
  };
  return (
    <button className="left-prev-button" type="button" label="left" onClick={handleOnClick}><i className="fas fa-chevron-left" /></button>
  );
};

export default LeftButton;
