import React from 'react';
import Button from '../../components/Button';
import Banner from './components/Banner';
import Header from './components/Header';

const Details = () => {
  const handleOnClick = () => {
    console.log('click');
  };

  return (
    <>
      <Header />
      <Banner />
      <Button handleOnClick={handleOnClick} name="Hello" />
    </>
  );
};

export default Details;
