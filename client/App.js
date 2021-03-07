import React from 'react';
import Compare from './modules/Compare';
import QnA from './modules/QnA';
import Reviews from './modules/Reviews';
import GlobalStyles from './GlobalStyles';
import Details from './modules/Details';

const PRODUCT_ID = '14037';
const App = () => (
  <div data-test="component-app">
    <GlobalStyles />
    <Details productId={PRODUCT_ID} />
    <Compare productId={PRODUCT_ID} />
    <QnA productId={PRODUCT_ID} />
    <Reviews productId={PRODUCT_ID}/>
  </div>
);

export default App;
