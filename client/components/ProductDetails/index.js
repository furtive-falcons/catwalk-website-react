import React, { useState } from 'react';
import { func, number, shape } from 'prop-types';
import AddToCart from '../AddToCart';
import ImageGallery from '../ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from '../StyleSelector';

import DivStyles from './styles';
import Banner from '../Banner';
import Header from '../Header';
import Slogan from '../Slogan';
import CheckList from '../CheckList';

const ProductDetails = ({
  product,
  setSelectedStyle,
  selectedStyle,
}) => {
  const [toggle, setToggle] = useState(false);

  const renderHeader = () => (
    <div className="header">
      <Header />
    </div>
  );

  const renderBanner = () => (
    <div className="banner">
      <Banner />
    </div>
  );

  const renderHGallery = () => (
    <div className="gallery">
      <ImageGallery
        toggle={toggle}
        setToggle={setToggle}
        photos={product.productStyles.results[selectedStyle].photos}
      />
    </div>
  );

  const renderInfo = () => (
    <div className="info">
      <ProductInformation selectedStyle={selectedStyle} product={product} />
    </div>
  );

  const renderSelector = () => (
    <div className="selector">
      <StyleSelector
        styles={product.productStyles.results}
        setSelectedStyle={setSelectedStyle}
        selectedStyle={selectedStyle}
      />
    </div>
  );

  const renderCart = () => (
    <div className="cart">
      <AddToCart
        styles={product.productStyles.results}
        selectedStyle={selectedStyle}
      />
    </div>
  );

  const renderSlogan = () => (
    <div className="slogan">
      <Slogan
        slogan={product.productInformation.slogan}
        description={product.productInformation.description}
      />
    </div>
  );

  const renderChecklist = () => (
    <div className="checkList">
      <CheckList features={product.productInformation.features} />
    </div>
  );

  if (!product) return null;

  return (
    <DivStyles toggle={toggle} data-test="component-details">
      <div className="container">
        {renderHeader()}
        {renderBanner()}
        {renderHGallery()}
        {renderInfo()}
        {renderSelector()}
        {renderCart()}
        {renderSlogan()}
        {renderChecklist()}
      </div>
    </DivStyles>
  );
};

ProductDetails.propTypes = {
  product: shape({}),
  selectedStyle: number,
  setSelectedStyle: func,
};

ProductDetails.defaultProps = {
  product: null,
  selectedStyle: null,
  setSelectedStyle: Function.prototype,
};

export default ProductDetails;
