import axios from 'axios';
import { func, number } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/ProductDetails';

const URL = '/api/products';

const DetailPage = ({ productId, setProductId }) => {
  const [product, setProduct] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(0);

  useEffect(() => {
    axios
      .get(`${URL}/${productId}`)
      .then((response) => {
        setProduct(response.data.data);
      });
  }, [productId]);

  return (
    <ProductDetails
      setProductId={setProductId}
      data-test="component-detail"
      setSelectedStyle={setSelectedStyle}
      selectedStyle={selectedStyle}
      product={product}
    />
  );
};

DetailPage.propTypes = {
  productId: number,
  setProductId: func,
};

DetailPage.defaultProps = {
  productId: null,
  setProductId: Function.prototype
};

export default DetailPage;
