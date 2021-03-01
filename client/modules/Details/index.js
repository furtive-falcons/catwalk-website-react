import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Details from './components/Details';
import Banner from '../../components/ProductDetails/components/Banner';

const DetailPage = () => {
  const handleOnClick = () => {
    console.log('click');
  };

  return (
    <>
      <Header />
      <Banner />
      <Details />
    </>
  );
};

export default DetailPage;
