import React, { Fragment } from 'react';
import Details from './components/Details';
import Compare from './components/Compare';
import QnA from './components/QnA';
import Reviews from './components/Reviews';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Details />
    <Compare />
    <QnA />
    <Reviews />
  </>
);

export default App;
