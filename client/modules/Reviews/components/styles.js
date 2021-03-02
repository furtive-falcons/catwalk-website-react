import styled from 'styled-components';

const RatingsContainer = styled.div`
  flex: 3.5;
  border: 1px solid black;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ReviewsContainer = styled.div`
  flex: 7;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

const TopContainer = styled.div`
  flex: 1;
  width: 95%;
  border: 1px solid black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

export { TopContainer,RatingsContainer, ReviewsContainer };
