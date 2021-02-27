import React from 'react';
import Details from './components/Details';
import Compare from './components/Compare';
import QnA from './components/QnA';
import Reviews from './components/Reviews';
import Header from './components/Header';

const App = () => (
  <div data-test="component-app">
    <Header />
    <Details />
    <Compare />
    <QnA />
    <Reviews />
    {/* testss */}
  </div>
);

export default App;
