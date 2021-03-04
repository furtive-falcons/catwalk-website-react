import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/ProductDetails';

const URL = 'http://localhost:3001/api/products/14931';

const DetailPage = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(URL).then(response => setProduct(response.data.data));
  }, []);

  return <ProductDetails product={product} />;
};

export default DetailPage;
