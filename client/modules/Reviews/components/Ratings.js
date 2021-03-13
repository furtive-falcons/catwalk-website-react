import React from 'react';
import { RatingsContainer, FilterBox, EditFilters } from './styles';
import Score from './ratingsComp/Score';
import Filter from './ratingsComp/Filter';
import Breakdown from './ratingsComp/Breakdown';

const Ratings = ({
  data, metaData, getFilter, filters, removeFilters, placeholder,
}) => {
  // Finds average rating based all current comments
  const average = (data) => {
    let totalScore = 0;
    for (let i = 0; i < data.length; i += 1) {
      totalScore += data[i].rating;
    }
    return (totalScore / data.length).toFixed(1);
  };

  // Indicate the filters being used
  const renderFilters = (data) => Object.keys(data).map((filter) => (
    <FilterBox onClick={() => getFilter(filter[0])} key={filter[0]}>
      {filter[0]}
      {' '}
      stars
    </FilterBox>
  ));

  // Finds number of comments per rating
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
            <Score total={data && data.length} score={average(data)} />
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
            <h2>Rating Breakdown</h2>
            <Breakdown recommend={metaData.recommended} data={metaData.characteristics} />
          </div>
        )}
    </RatingsContainer>
  );
};

export default Ratings;
