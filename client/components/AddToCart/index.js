import { arrayOf, number, shape } from 'prop-types';
import React, { useState } from 'react';
import limit from '../../helpers/limit';
import Button from '../Button';
import DropDown from '../DropDown';
import { AddToBagWrapper, HeartStyles } from './styles';

const DEFAULT_SIZE = 'SELECT SIZE';
const DEFAULT_QTY = '-';

const AddToCart = ({ styles, selectedStyle }) => {
  const [quantityOptions, setQuantityOptions] = useState(['-']);
  const [selectedSize, setSelectedSize] = useState(DEFAULT_SIZE);
  const [selectedQty, setSelectedQty] = useState(DEFAULT_QTY);
  const selectedSizes = styles[selectedStyle].skus;
  const sizes = Object.entries(selectedSizes).map((size) => size[1].size);
  const [addToBag, setAddToBag] = useState({});

  const handleSizeChange = (e) => {
    const selected = Object.values(selectedSizes).find(
      (el) => el.size === e.target.value
    );

    setQuantityOptions(
      Array.from({ length: limit(selected.quantity) }, (_, i) => i + 1)
    );
    setSelectedSize(selected.size);
    setSelectedQty(1);
    console.log(selectedQty, selectedSize);
  };

  const handleQtyChange = (e) => {
    console.log(e.target.value);
    const selected = quantityOptions.find((el) => el === e.target.value);
    console.log(quantityOptions);
    setSelectedQty(selectedQty);
  };
  const handleOnClickAddToBag = () => {
    console.log(quantityOptions, selectedSize);
  };

  const handleOnClickIcon = () => {};

  return (
    <>
      <DropDown
        hasMargins
        handleOnChange={handleSizeChange}
        selectedOption={selectedSize}
        size={63}
        options={sizes.length > 0 ? [DEFAULT_SIZE, ...sizes] : ['OUT OF STOCK']}
      />
      <DropDown
        handleOnChange={handleQtyChange}
        selectedOption={selectedQty}
        size={32}
        options={quantityOptions}
      />
      <AddToBagWrapper>
        {sizes.length > 0 && (
          <Button
            handleOnClick={handleOnClickAddToBag}
            label="Add to cart"
            size="82%"
            icon="plus"
            primary
            name="Add To Bag"
          />
        )}
        <HeartStyles>
          <Button
            handleOnClick={handleOnClickIcon}
            label="Star icon"
            size="5rem"
            isContentCentered
            primary
            icon="star"
          />
        </HeartStyles>
      </AddToBagWrapper>
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
