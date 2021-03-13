import React from 'react';
import { FilterDiv } from './styles';
import Bar from './Bar';

const Filter = ({ data, total, getFilter }) => (
  <FilterDiv id="filter">
    {
      data
      && Object.entries(data).map((ratings) => (
        <div className="barContainer" key={ratings}>
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
