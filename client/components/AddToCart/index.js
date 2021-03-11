import { arrayOf, number, shape } from 'prop-types';
import React, { useState } from 'react';
import limit from '../../helpers/limit';
import Button from '../Button';
import DropDown from '../DropDown';
import { AddToBagWrapper, HeartStyles } from './styles';

const DEFAULT_SIZE = 'SELECT SIZE';

const AddToCart = ({ styles, selectedStyle }) => {
  const [quantityOptions, setQuantityOptions] = useState(['-']);
  const [selectedSize, setSelectedSize] = useState(DEFAULT_SIZE);
  const selectedSizes = styles[selectedStyle].skus;
  const sizes = Object.entries(selectedSizes).map((size) => size[1].size);

  const handleSizeChange = (e) => {
    const selected = Object.values(selectedSizes).find(
      (el) => el.size === e.target.value
    );

    setQuantityOptions(
      Array.from({ length: limit(selected.quantity) }, (_, i) => i + 1)
    );
    setSelectedSize(selected.size);
  };

  return (
    <>
      <DropDown
        hasMargins
        handleOnChange={handleSizeChange}
        selectedOption={selectedSize}
        size={63}
        options={sizes.length > 0 ? [DEFAULT_SIZE, ...sizes] : ['OUT OF STOCK']}
      />
      <DropDown size={32} options={quantityOptions} />
      <AddToBagWrapper>
        {sizes.length > 0 && (
          <Button label="Add to cart" size="82%" icon="plus" primary name="Add To Bag" />
        )}
        <HeartStyles>
          <Button label="Star icon" size="5rem" isContentCentered primary icon="star" />
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
