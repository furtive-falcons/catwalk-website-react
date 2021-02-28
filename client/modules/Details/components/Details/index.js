import React from 'react';
import DivStyles from './styles';

const Details = () => {
  return (
    <DivStyles data-test="component-details">
      <div className="container">
        <div className="gallery">Image Gallery</div>
        <div className="info">Product Information</div>
        <div className="selector">Style Selector</div>
        <div className="cart">Add to Cart</div>
        <div className="footer">Footer</div>
      </div>
    </DivStyles>
  );
};

export default Details;
