import React from 'react';
import AddToCart from '../../../../components/AddToCart';
import ProducInformation from '../../../../components/ProductDetails/components/ProductInformation';
import StyleSelector from '../../../../components/StyleSelector';

import DivStyles from './styles';

const Details = () => (
  <DivStyles data-test="component-details">
    <div className="container">
      <div className="gallery">Image Gallery</div>
      <div className="info">
        <ProducInformation />
      </div>
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

export default Details;
