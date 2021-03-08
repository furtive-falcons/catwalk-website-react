import React from 'react';

const LeftButton = () => {
  const previousCard = () => {
    console.log('Left button was clicked');
  };
  return (
    <button className="left-prev-button" type="button" label="left" onClick={previousCard}><i className="fas fa-chevron-left" /></button>
  );
};

export default LeftButton;
