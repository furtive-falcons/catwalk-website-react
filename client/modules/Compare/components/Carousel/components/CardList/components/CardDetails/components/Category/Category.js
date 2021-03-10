import React from 'react';
import {CategoryStyles} from './styles';

const Category = ({ card }) => {
  if(!card) {
    return null;
  }
  return (
      <CategoryStyles>
        {card}
      </CategoryStyles>
  )
}

export default Category;
