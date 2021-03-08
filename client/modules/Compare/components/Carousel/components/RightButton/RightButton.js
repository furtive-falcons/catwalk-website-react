import React from 'react';

const RightButton = () => {
  const nextCard = () => {
    console.log('Right button was clicked');
  };

  return (
    <button className="right-prev-button" type="button" lable="right" onClick={nextCard}>
      <i className="fas fa-chevron-right" />
    </button>
  );
};

export default RightButton;
