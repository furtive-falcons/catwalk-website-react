import styled from 'styled-components';

const CarouselContainer = styled.div`
  flex: 3.5;
  border: 1px solid red;
  max-width: 1400px;
  max-height: 520px;
  margin: 0 auto;
  padding: 10px 50px 10px 50px;
  flex-direction: row;
  // position: center;
  position: relative;
  display: flex;

  overflow-x: hidden;
  overflow-y: hidden;

  .left-prev-button{
    position: absolute;
    top: 35%;
    left: 8.2%;
    transform: translateY(-50%);
    background-color: white;
    border: none;
    cursor: pointer;
    z-index: 1;
    font-size: 45px;
    padding: 3px;
    scroll-behavior: smooth;
    user-select: none;
  }
  .left-prev-button:hover{
    border: 1px solid black;
    font-size: 55px;
  }
  .right-prev-button{
    position: absolute;
    top: 35%;
    right: 7%;
    transform: translateY(-50%);
    background-color: white;
    z-index: 1;
    font-size: 45px;
    padding: 3px;
    cursor: pointer;
    border: none;
    scroll-behavior: smooth;
    user-select: none;
  }
  .right-prev-button:hover{
    border: 1px solid black;
    font-size: 55px;
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
