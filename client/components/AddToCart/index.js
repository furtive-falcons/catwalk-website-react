import React from 'react';
import Button from '../Button';
import DropDown from '../DropDown';

const AddToCart = () => {
  const sizeOptions = ['SELECT SIZE', 'small', 'medium', 'large'];
  const quantityOptions = [1, 2, 3];
  return (
    <>
      <DropDown size={20} options={sizeOptions} />
      <DropDown size={10} options={quantityOptions} />
      <br />
      <Button size={25} icon="plus" primary name="Add To Bag" />
      <Button primary icon="star" />
    </>
  );
};

export default AddToCart;
