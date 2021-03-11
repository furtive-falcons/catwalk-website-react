import axios from 'axios';
import { string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/ProductDetails';

const URL = '/api/products';

const DetailPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(0);

  useEffect(() => {
    axios
      .get(`${URL}/${productId}`)
      .then((response) => setProduct(response.data.data));
  }, []);

  return (
    <ProductDetails
      data-test="component-detail"
      setSelectedStyle={setSelectedStyle}
      selectedStyle={selectedStyle}
      product={product}
    />
  );
};

DetailPage.propTypes = {
  productId: string,
};

DetailPage.defaultProps = {
  productId: null,
};

export default DetailPage;
