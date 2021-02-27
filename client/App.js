import React from 'react';
import Details from './components/Details';
import Compare from './components/Compare';
import QnA from './components/QnA';
import Reviews from './components/Reviews';
import GlobalStyles from './GlobalStyles';

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
