import { arrayOf, number, shape } from 'prop-types';
import React, { useState } from 'react';
import limit from '../../helpers/limit';
import Button from '../Button';
import DropDown from '../DropDown';

const AddToCart = ({ styles, selectedStyle }) => {
  const [quantityOptions, setQuantityOptions] = useState(['-']);
  const selectedSizes = styles[selectedStyle].skus;
  const sizes = Object.entries(selectedSizes).map((size) => size[1].size);

  const handleSizeChange = (e) => {
    const selected = Object.values(selectedSizes).find(
      (el) => el.size === e.target.value
    );

    setQuantityOptions(
      Array.from({ length: limit(selected.quantity) }, (_, i) => i + 1)
    );
  };

  return (
    <>
      <DropDown
        handleOnChange={handleSizeChange}
        size={60}
        options={['SELECT SIZE', ...sizes]}
      />
      <DropDown size={30} options={quantityOptions} />
      <Button size={25} icon="plus" primary name="Add To Bag" />
      <Button primary icon="star" />
    </>
  );
};

AddToCart.propTypes = {
  selectedStyle: number,
  styles: arrayOf(shape({})),
};

AddToCart.defaultProps = {
  selectedStyle: null,
  styles: null,
};

export default AddToCart;
