import React from 'react';

const FavIcon = () => {
  const modalClick = () => {
    console.log('Modal button was clicked');
  };
  return (
    <button className="fav-icon" type="button" label="modal" onClick={modalClick}><i className="fas fa-star" /></button>
  );
};

export default FavIcon;
