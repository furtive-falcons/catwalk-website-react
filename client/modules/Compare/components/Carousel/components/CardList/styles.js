import styled from 'styled-components';

export const CardListContainer = styled.div`
  flex: 5;
  // display: inline-block;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  border: none;
  // border: 1px solid blue;
  min-width: 375px;
  width: auto;
  margin: 5px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  .left-prev-button{
    position: absolute;
    top: 40%;
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
    background-color: black;
    color: white;
  }
  .right-prev-button{
    position: absolute;
    top: 40%;
    right: 5%;
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
    background-color: black;
    color: white;
  }
`


export const CardContainer = styled.div`
  flex: 3.5;
  flex-direction: row;
  display: inline-block;
  border: 1px solid black;
  width: auto;
  margin: 5px;
  padding: 10px;
  max-width: 230px;
  max-height: 450px;

`;

// export default CardContainer;

// max-width: 250px;
// max-height: 350px;