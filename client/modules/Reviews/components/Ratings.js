import React, { useEffect } from 'react';
import { RatingsContainer, FilterBox } from './styles.js';
import Score from './ratingsComp/Score.js';
import Filter from './ratingsComp/Filter.js';
import Breakdown from './ratingsComp/Breakdown.js';
import Recommend from './ratingsComp/Recommend.js';

const Ratings = ({
  data, metaData, getFilter, filters, removeFilters,
}) => {

  // finds average rating
  const average = (data) => {
    let score = 0;
    for (const review of data) {
      score += review.rating;
    }
    return (score / data.length).toFixed(1);
  };

  // sort data by ratings
  const sortByRatings = (data) => {
    const method = 'rating';
    data.sort((a, b) => {
      if (a[method] > b[method]) {
        return -1;
      }
      if (a[method] < b[method]) {
        return 1;
      }
      return 0;
    });
  };

  // render filters being used
  const renderFilters = (data) => {
    return Object.keys(data).map((filter,index)=>{
      return (
        <FilterBox onClick={()=>getFilter(filter[0])} key={index}>{filter[0]} stars</FilterBox >
      )
    });
  };

  useEffect(() => {
    if (data) {
      sortByRatings(data);
    }
  }, []);

  // finds number of comments per rating
  const reduceData = (data) => {
    const obj = {
      5: 0, 4: 0, 3: 0, 2: 0, 1: 0,
    };
    for (const comment of data) {
      obj[comment.rating] += 1;
    }
    return obj;
  };
  return (
    <RatingsContainer>
      {/* score */}
      <Score total={data.length} score={average(data)} />
      {Object.keys(filters).length !== 0
        && (
          <div className='editFilter'>
            <div>
              Comments with:
              {renderFilters(filters)}
            </div>
            <span className='remove' onClick={removeFilters}>Remove Filters</span>
          </div>
        )
        }

      {/* filter */}
      <Filter getFilter={getFilter} total={data.length} data={reduceData(data)} />
      {/* breakdown */}
      <Breakdown recommend={metaData.recommended} data={metaData.characteristics} />
    </RatingsContainer>
  );
};

export default Ratings;
