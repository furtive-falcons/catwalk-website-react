import React from 'react';
import Compare from './modules/Compare';
import QnA from './modules/QnA';
import Reviews from './modules/Reviews';
import GlobalStyles from './GlobalStyles';
import Details from './modules/Details';

const PRODUCT_ID = '14034';
const App = () => (
  <div data-test="component-app">
    <GlobalStyles />
    <Details productId={PRODUCT_ID} />
    <Compare />
    <QnA />
    <Reviews />
  </div>
);

export default App;
