import styled from 'styled-components';
import { fadeIn, expand } from './animationStyles.js';

const RatingsContainer = styled.div`
  font-size: 1.2rem;
  flex: 2.5;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .innerContainer {
    width: 95%;
  }


  .remove {
    text-decoration: underline;
  }

  .remove: hover {
    animation: ${fadeIn} 0.5s;
    cursor: pointer;
    color: white;
    background-color: black;
    padding: 3px;
  }

`;

const EditFilters = styled.div`
  animation: ${expand} 0.3s;
`;

const FilterBox = styled.span`
  text-decoration: underline;
  padding: 5px;

  :hover {
    animation: ${fadeIn} 0.5s;
    cursor: pointer;
    color: white;
    background-color: black;
    padding: 3px;
  }
`;

const ReviewsContainer = styled.div`
  font-size: 1.2rem;
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

const TopContainer = styled.div`
  font-size: 1.2rem;
  flex: 1;
  width: 95%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
  padding: 10px;
`;

export {
  FilterBox, EditFilters, TopContainer, RatingsContainer, ReviewsContainer,
};
