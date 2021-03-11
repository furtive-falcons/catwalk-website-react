import React from 'react';
import { FilterDiv } from './styles.js';
import Bar from './Bar.js';

const Filter = ({ data, total, getFilter }) => (
  <FilterDiv id="filter">
    {
      data
      && Object.entries(data).map((ratings, index) => (
        <div className="barContainer" key={index}>
          {data[ratings[0]] > 0
            ? (
              <span className="clickable" onClick={() => getFilter(ratings[0])}>
                {ratings[0]}
                {' '}
                stars
              </span>
            )
            : (
              <span className="notClickable">
                {ratings[0]}
                {' '}
                stars
              </span>
            )}
          <Bar rating={ratings[1]} total={total} />
          <span className="count">{data[ratings[0]]}</span>
        </div>
      ))

    }
  </FilterDiv>
);

export default Filter;
