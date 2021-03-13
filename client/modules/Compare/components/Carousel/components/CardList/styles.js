import styled from 'styled-components';

export const CardListContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  min-width: 375px;
  width: auto;
  margin: 5px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  .left-prev-button{
    position: absolute;
    top: 50%;
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
    top: 50%;
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
    padding: 0px 0px 5px 0px;
  }
  .cardContainer:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px;
  }
`;
