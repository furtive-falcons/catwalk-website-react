import styled from 'styled-components';

const RatingsContainer = styled.div`
  font-size: 1.2rem;
  flex: 3.5;
  // border: 1px solid black;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .remove {
    text-decoration: underline;
  }

  .remove: hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }

  .editFilter {
    height:40px;
  }
`;

const FilterBox = styled.span`
  text-decoration: underline;
  padding: 5px;

  :hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;

const ReviewsContainer = styled.div`
  font-size: 1.2rem;
  flex: 7;
  display: flex;
  // border: 1px solid red;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

const TopContainer = styled.div`
  font-size: 1.2rem;
  flex: 1;
  width: 95%;
  // border: 1px solid black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
`;

export { FilterBox, TopContainer,RatingsContainer, ReviewsContainer };
