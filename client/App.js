import React from 'react';
import Compare from './modules/Compare';
import QnA from './modules/QnA';
import Reviews from './components/Reviews';
import GlobalStyles from './GlobalStyles';
import Details from './modules/Details';

const App = () => (
  <div data-test="component-app">
    <GlobalStyles />
    <Details />
    <Compare />
    <QnA />
    <Reviews />
  </div>
);

export default App;
