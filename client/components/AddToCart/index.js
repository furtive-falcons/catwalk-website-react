import React from 'react';
import Button from '../Button';
import DropDown from '../DropDown';

const AddToCart = () => {
  const sizeOptions = ['SELECT SIZE', 'small', 'medium', 'large'];
  const quantityOptions = [1, 2, 3];
  return (
    <>
      <DropDown options={sizeOptions} />
      <DropDown options={quantityOptions} />
      <Button name="Add To Bag" />
      <Button name="Star Icon" />
    </>
  );
};

export default AddToCart;
