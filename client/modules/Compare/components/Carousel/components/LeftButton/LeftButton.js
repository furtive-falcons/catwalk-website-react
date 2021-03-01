import React from 'react';
import Button from '../../../../../../components/Button';

const LeftButton = () => {
  const handleOnClick = () => {
    console.log('Left button was clicked');
  };
  return (
    <>
      <Button handleOnClick={handleOnClick} name="Left Button" />
    </>
  );
};

export default LeftButton;
