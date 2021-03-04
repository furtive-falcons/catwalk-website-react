import React, {useEffect} from 'react'
import {RatingsContainer} from './styles.js';
import Score from './ratingsComp/Score.js';
import Filter from './ratingsComp/Filter.js';
import Breakdown from './ratingsComp/Breakdown.js';
import Recommend from './ratingsComp/Recommend.js';

const Ratings = ({data, metaData, getFilter, filters, removeFilters}) => {

  // finds average rating
  const average = (data) => {
    let score = 0;
    for (var review of data) {
      score += review.rating;
    }
    return (score/data.length).toFixed(1);
  }



  // sort data by ratings
  const sortByRatings =(data)=>{
    const method = "rating";
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

  useEffect(()=>{
    if (data) {
      sortByRatings(data);
    }
  },[]);

  // finds number of comments per rating
  const reduceData = (data) => {
    let obj = {5:0,4:0,3:0,2:0,1:0};
    for (var comment of data) {
      obj[comment.rating]+= 1;
    }
    return obj;
  }
    return (
        <RatingsContainer>
          {/* score */}
          <Score score={average(data)}/>
          <Recommend recommend = {metaData.recommended}/>
          {Object.keys(filters).length !== 0 ?
          <div>
            <div>Comments with: {Object.keys(filters).join(',')}{" "}stars{" "}</div>
            <span onClick={removeFilters}>Remove Filters</span>
          </div>
          :
          <span>No filters applied</span>
          }

          {/* filter */}
          <Filter getFilter={getFilter} total={data.length} data={reduceData(data)}/>
          {/* breakdown */}
          <Breakdown/>
        </RatingsContainer>
    )
}

export default Ratings;
