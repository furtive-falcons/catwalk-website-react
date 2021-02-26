import React, { Fragment } from 'react';
import Details from './components/Details';
import Compare from './components/Compare';
import QnA from './components/QnA';
import Reviews from './components/Reviews';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Details />
      <Compare />
      <QnA />
      <Reviews />
    </Fragment>
  );
};

export default App;
