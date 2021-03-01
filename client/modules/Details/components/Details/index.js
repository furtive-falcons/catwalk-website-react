import React from 'react';
import StyleSelector from '../../../../components/StyleSelector';
import AddToCart from '../../../../components/AddToCart';
import DivStyles from './styles';

const Details = () => {
  return (
    <DivStyles data-test="component-details">
      <div className="container">
        <div className="gallery">Image Gallery</div>
        <div className="info">Product Information</div>
        <div className="selector">
          <StyleSelector />
        </div>
        <div className="cart">
          <AddToCart />
        </div>
        <div className="footer">Footer</div>
      </div>
    </DivStyles>
  );
};

export default Details;
