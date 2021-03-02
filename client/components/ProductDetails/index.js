import React from 'react';
import AddToCart from '../AddToCart';
import ImageGallery from '../ImageGallery';
import ProducInformation from './components/ProductInformation';
import StyleSelector from '../StyleSelector';

import DivStyles from './styles';

const ProductDetails = () => (
  <DivStyles data-test="component-details">
    <div className="container">
      <div className="gallery">
        <ImageGallery />
      </div>
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

export default ProductDetails;
