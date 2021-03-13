import React from 'react';
import { string } from 'prop-types';
import { CategoryStyles } from './styles';

const Category = ({ card }) => {
  if (!card) {
    return null;
  }
  return (
    <CategoryStyles>
      {card}
    </CategoryStyles>
  );
};

Category.propTypes = {
  card: string,
};

Category.defaultProps = {
  card: null,
};

export default Category;
