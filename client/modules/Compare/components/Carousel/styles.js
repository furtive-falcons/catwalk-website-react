import styled from 'styled-components';

const CarouselContainer = styled.div`
  flex: 3.5;
  // border: 1px solid black;
  border: none;
  width: 1400px;
  margin: 0 auto;
  padding: 10px 50px 10px 50px;
  flex-direction: row;
  position: center;
  .left-prev-button{
    background-color: transparent;
    font-size: 35px;
    padding: 3px;
    border: none;
    cursor: pointer;
    scroll-behavior: smooth;
  }
  .left-prev-button:hover{
    color: white;
  }
  .right-prev-button{
    background-color: transparent;
    font-size: 35px;
    padding: 3px;
    border: none;
    cursor: pointer;
    scroll-behavior: smooth;
  }
  .right-prev-button:hover{
    color: white;
  }
`;

export default CarouselContainer;
// position: absolute;
// left: 200px;
// top: 670px;
// z-index: 1;

// position: absolute;
// left: 1390px;
// top: 670px;
// z-index: 1;
