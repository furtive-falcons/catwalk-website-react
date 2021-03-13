import styled from 'styled-components';
import {fadeIn, slideUp} from '../animationStyles.js';


const DropdownContainer = styled.div`
  select {
    border: none;
    font-weight: bold;
    border-bottom: 2px solid black;
    font-size: 14px;
  }
  margin-left: 5px;

  select:hover {
    background-color: black;
    color: white;
  }
`;

const ReviewListContainer = styled.div`
  flex: 7;
  width: 95%;
  min-height: 500px;
  max-height: 825px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  .blank {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 2rem;
  }
`;

const ButtonsContainer = styled.div`
  flex: 2;
  margin-top: 40px;
  width: 95%;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const TileContainer = styled.div`
  padding: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 95%;
  border-bottom: 0.5px solid grey;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 1.3s ease-out;
`;

const ModalContainer = styled.div`
  display: block;
  position:fixed;
  z-index:1;
  width: 100%;
  height: 100%;
  background-color: white;
  left: 0;
  top: 0;
  overflow: scroll;
  animation: ${slideUp} 0.5s;

  .formDiv {
    background-color: white;
  }
`;

export {
  ModalContainer, DropdownContainer, ReviewListContainer, ButtonsContainer, TileContainer,
};
