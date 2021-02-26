import React, { Fragment } from 'react';
import Details from './components/Details';
import Compare from './components/Compare';
import QnA from './components/QnA';
import Reviews from './components/Reviews';

const App = () => (
  <div data-test="component-app">
    <Details />
    <Compare />
    <QnA />
    <Reviews />
  </div>
);

export default App;
