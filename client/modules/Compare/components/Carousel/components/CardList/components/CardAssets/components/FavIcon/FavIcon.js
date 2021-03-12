import React from 'react';
// import Button from '../../../../../components/Button'

const FavIcon = () => {
  const modalClick = () => {
    console.log('Modal button was clicked');
  };
  return (
    <button className="fav-icon" type="button" name="modal" label="modal" onClick={modalClick}><i className="fas fa-star" /></button>
    // <Button primary></Button>
  );
};

export default FavIcon;
