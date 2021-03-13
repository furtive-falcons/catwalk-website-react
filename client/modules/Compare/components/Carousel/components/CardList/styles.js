import styled from 'styled-components';

export const CardListContainer = styled.div`
  flex: 5;
  // display: inline-block;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  // border: none;
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
    left: 2%;
    transform: translateY(-50%);
    background-color: #3BBF4F;
    color: white;
    border: 1px solid black;
    cursor: pointer;
    z-index: 1;
    font-size: 24px;
    padding: 14px 20px 14px 20px;
    scroll-behavior: smooth;
    user-select: none;
  }
  .left-prev-button:hover{
    background-color: black;
    color: #3BBF4F;
  }
  .right-prev-button{
    position: absolute;
    top: 40%;
    right: 2%;
    transform: translateY(-50%);
    background-color: #3BBF4F;
    color: white;
    border: 1px solid black;
    cursor: pointer;
    z-index: 1;
    font-size: 24px;
    padding: 14px 20px 14px 20px;
    scroll-behavior: smooth;
    user-select: none;
  }
  .right-prev-button:hover{
    background-color: black;
    color: #3BBF4F;
  }
`;

export const CardContainer = styled.div`
  .cardContainer{
    flex: 3.5;
    flex-direction: row;
    display: inline-block;
    width: auto;
    margin: 5px;
    max-width: 230px;
    max-height: 450px;
  }
  .cardContainer{
    border: 1px solid black;
  }
`;
