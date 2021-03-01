import React from 'react';
import Button from '../../components/Button';
import Banner from './components/Banner';
import Header from '../../components/Header';
import Details from './components/Details';

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
