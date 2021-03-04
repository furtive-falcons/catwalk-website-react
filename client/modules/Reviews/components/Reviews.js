import React, { useState, useEffect } from 'react';
import { ReviewsContainer, TopContainer } from './styles.js';
import ReviewCount from './reviewComp/ReviewCount.js';
import ReviewList from './reviewComp/ReviewList.js';
import Sort from './reviewComp/Sort.js';
import Buttons from './reviewComp/Buttons.js';

const Reviews = ({ data, filters }) => {
  // Keep track of number of tiles to show
  // default is 2
  // depends on number of reviews passed in
  const [numTiles, changeNumTiles] = useState(2);

  // filter list based on filter passed in
  const filterByFilter= (filter,data) => {
    // if there're no filter, then just return the data
    if (Object.keys(filters).length === 0) {
      return data;
    }
    return data.filter((comment)=>filter[comment.rating]===true);
  };


  // keep track of type of sort
  const [sortValue, changeSortMethod] = useState('newest');

  // Function to show only the first n comments, where n is numTiles
  const filterData = (n, data) =>{
    // sort the data
    sort(data,sortValue);
    // slice data to show only up to nth comments with filter applied
    return filterByFilter(filters, data).slice(0, n)
  };

  // Function to expand the number of comments
  const expand = () => {
    changeNumTiles(numTiles + 2);
  };

  // Function to sort the data based on selected sorting method
  // output: sorted list
  const getSortMethod = (event) => {
    const method = event.target.value;
    changeSortMethod(method);
  };

  const sort =(data, method)=>{
    data.sort((a, b) => {
      if (a[method] > b[method]) {
        return -1;
      }
      if (a[method] < b[method]) {
        return 1;
      }
      return 0;
    });
  }


  return (
    <ReviewsContainer>
      {/* review count + sort container */}
      <TopContainer>
        <ReviewCount count={data.length} />
        ,
        sorted by
        <Sort getSortMethod={getSortMethod} sortValue={sortValue} />
      </TopContainer>
      {/* review list container */}
      {data.length !== 0
      && <ReviewList data={filterData(numTiles, data)} />}
      {/* buttons container */}
      <Buttons reviewCount={data.length} dataIndex={numTiles} expand={expand} />
    </ReviewsContainer>
  );
};

export default Reviews;
