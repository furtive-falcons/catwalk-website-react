import React from 'react';
import { shape } from 'prop-types';
import AddToCart from '../AddToCart';
import ImageGallery from '../ImageGallery';
import ProducInformation from './components/ProductInformation';
import StyleSelector from '../StyleSelector';

import DivStyles from './styles';
import Banner from '../Banner';
import Header from '../Header';
import Slogan from '../Slogan';
import CheckList from '../CheckList';

const ProductDetails = ({ product }) => (
  <DivStyles data-test="component-details">
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="gallery">
        <ImageGallery />
      </div>
      <div className="info">
        <ProducInformation product={product} />
      </div>
      <div className="selector">
        <StyleSelector />
      </div>
      <div className="cart">
        <AddToCart />
      </div>
      <div className="slogan">
        <Slogan />
      </div>
      <div className="checkList">
        <CheckList />
      </div>
    </div>
  </DivStyles>
);

ProductDetails.propTypes = {
  product: shape({}),
};

ProductDetails.defaultProps = {
  product: null,
};

export default ProductDetails;
