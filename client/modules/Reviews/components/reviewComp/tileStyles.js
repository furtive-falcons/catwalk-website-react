import styled from 'styled-components';
import { fadeIn } from '../animationStyles.js';

const TopRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReviewContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  margin-top: 5px;
  padding-top: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  .img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-left: 5px;
    margin-right: 5px;

  }
`;

const ResponseContainer = styled.div`
  background-color: #D3D3D3;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 10px;


  span {
    font-weight: bold;
    margin-left: 10px;
    font-size: 13px;
  }

  p {
    margin-top: 5px;
    margin:0px;
    // border: 1px solid black;
    font-size: 12px;
    margin: 0px;
  }

`;

const Stars = styled.div`
  font-size: 12px;
`;

const UserAndDate = styled.div`
  font-size: 12px;
`;

const Summary = styled.div`
  margin:0px;
  font-size: 2rem;
  font-weight: 700;

`;

const Body = styled.div`
  margin-top: 5px;
  // border: 1px solid black;
  font-size: 12px;
  margin: 0px;
  padding: 5px;
  padding-top: 10px;

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
  font-size: 12px;
  margin: 0px;
  padding: 3px;
  padding-top: 10px;

  .fa-check {
    margin-right: 5px;
  }

`;

const HelpfulDiv = styled.span`
  margin-top: 5px;
  font-size: 12px;
  margin: 0px;
  padding-top: 10px;

  span {
    text-decoration: underline;
  }

  span: hover {
    animation: ${fadeIn} 0.5s;
    cursor: pointer;
    background-color: black;
    color: white;
  }

  .reported {
    cursor: auto,
    text-decoration: none;
  }

`;

export {
  ImageContainer,
  ResponseContainer,
  ReviewContainer, TopRow, Stars, UserAndDate, Summary, Body, Recommend, HelpfulDiv,
};
