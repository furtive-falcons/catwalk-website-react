import axios from 'axios';
import { string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/ProductDetails';

const URL = 'http://localhost:3001/api/products';

const DetailPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`${URL}/${productId}`).then((response) => setProduct(response.data.data));
  }, []);

  return <ProductDetails product={product} />;
};

DetailPage.propTypes = {
  productId: string,
};

DetailPage.defaultProps = {
  productId: null,
};

export default DetailPage;
