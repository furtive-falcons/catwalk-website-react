import React from 'react';
import { RatingsContainer, FilterBox, EditFilters } from './styles.js';
import Score from './ratingsComp/Score.js';
import Filter from './ratingsComp/Filter.js';
import Breakdown from './ratingsComp/Breakdown.js';

const Ratings = ({
  data, metaData, getFilter, filters, removeFilters, placeholder,
}) => {

  // finds average rating
  const average = (metaData) => {
    let totalScore = 0;
    const metaDataArray = Object.keys(metaData);
    for (let i = 0; i < metaDataArray.length; i += 1) {
      totalScore += parseInt(metaData[metaDataArray[i]], 10) * parseInt(metaDataArray[i], 10);
    }
    let totalReviews = 0;
    for (let i = 0; i < metaDataArray.length; i += 1) {
      totalReviews += parseInt(metaData[metaDataArray[i]], 10);
    }
    return (totalScore / totalReviews).toFixed(1);
  };

  // render filters being used
  const renderFilters = (data) => Object.keys(data).map((filter) => (
    <FilterBox onClick={() => getFilter(filter[0])} key={filter[0]}>
      {filter[0]}
      {' '}
      stars
    </FilterBox>
  ));


  // finds number of comments per rating
  const reduceData = (data) => {
    const obj = {
      5: 0, 4: 0, 3: 0, 2: 0, 1: 0,
    };
    for (let i = 0; i < data.length; i++) {
      obj[data[i].rating] += 1;
    }
    return obj;
  };
  return (
    <RatingsContainer>
      {placeholder ? <h4>Loading</h4>
        : (
          <div className="innerContainer">
            <Score total={data.length} score={average(metaData.ratings, data)} />
            <div className="editFilter">
              {Object.keys(filters).length !== 0
        && (
          <EditFilters>
            <div>
              Comments with:
              {renderFilters(filters)}
            </div>
            <span
              className="remove"
              onClick={removeFilters}
            >
              Remove Filters
            </span>
          </EditFilters>
        )}
            </div>
            <Filter getFilter={getFilter} total={data.length} data={reduceData(data)} />
            <Breakdown recommend={metaData.recommended} data={metaData.characteristics} />
          </div>
        )}
    </RatingsContainer>
  );
};

export default Ratings;
