import React from 'react'
import {RatingsContainer} from './styles.js';
import Score from './ratingsComp/Score.js';
import Filter from './ratingsComp/Filter.js';
import Breakdown from './ratingsComp/Breakdown.js';

const Ratings = () => {
    return (
        <RatingsContainer>
          {/* score */}
          <Score/>
          {/* filter */}
          <Filter/>
          {/* breakdown */}
          <Breakdown/>
        </RatingsContainer>
    )
}

export default Ratings;
