import React from 'react';
import { FilterDiv } from './styles.js';
import Bar from './Bar.js';

const Filter = ({ data, total, getFilter}) => (
  <FilterDiv id="filter">
    {
      data &&
      Object.entries(data).map((ratings, index) => (
        <div onClick= {()=>getFilter(ratings[0])} key={index}>
          {ratings[0]} stars
          <Bar rating={ratings[1]} total={total} />
        </div>
      ))

    }
  </FilterDiv>
);

export default Filter;
