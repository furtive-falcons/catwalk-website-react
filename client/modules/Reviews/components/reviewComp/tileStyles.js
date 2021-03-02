import styled from 'styled-components';


const TopRow = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between
`;

const ReviewContainer = styled.div`
  border: 1px solid black;
  margin-top: 5px;
  width: 100%;
  margin-top: 5px;

`;

const ResponseContainer = styled.div`
  background-color: #D3D3D3;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-weight: bold;
    margin:0px;
    font-size: 13px;
  }

  p {
    margin-top: 5px;
    margin:0px;
    border: 1px solid black;
    font-size: 12px;
    margin: 0px;
  }

`;

const Stars = styled.div`
  border: 1px solid black;
  font-size: 12px;
`;

const UserAndDate = styled.div`
  border: 1px solid black;
  font-size: 12px;
  color: #808080;
`;

const Summary = styled.h4`
  border: 1px solid black;
  margin:0px;

`;

const Body = styled.p`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;
  padding: 5px;

  .showMore: hover {
    cursor: pointer;
  }
  .showMore {
    color: blue;
    text-decoration: underline;
  }

`;

const Recommend = styled.span`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;
  padding: 3px;

  .fa-check {
    margin-left: 5px;
  }

`;

const Helpful = styled.span`
  margin-top: 5px;
  border: 1px solid black;
  font-size: 12px;
  margin: 0px;
  color: #808080;

`;

export {ResponseContainer, ReviewContainer,TopRow, Stars, UserAndDate, Summary, Body, Recommend, Helpful };