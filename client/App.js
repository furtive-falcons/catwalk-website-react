import React, { useEffect, useState } from 'react';
import Compare from './modules/Compare';
import { QnA } from './modules/QnA';
import Reviews from './modules/Reviews';
import GlobalStyles from './GlobalStyles';
import Details from './modules/Details';
import linksList from './data';

const App = () => {
  const [links, setLinks] = useState(linksList);
  const [productId, setProductId] = useState(linksList[0].productId);

  return (
    <div data-test="component-app">
      <GlobalStyles />
      <Details setProductId={setProductId} productId={productId} />
      <Compare productId={productId} />
      <QnA productId={productId} />
      <Reviews productId={productId} />
    </div>
  );
};

export default App;
