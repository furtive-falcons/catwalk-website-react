import React from 'react';
import { FilterDiv } from './styles.js';
import Bar from './Bar.js';

const Filter = ({ data, total }) => (
  <FilterDiv id="filter">
    {
      Object.entries(data).map((ratings, index) => (
        <div key={index}>
          {ratings[0]} stars
          <Bar rating={ratings[1]} total={total} />
        </div>
      ))
    }
  </FilterDiv>
);

export default Filter;
