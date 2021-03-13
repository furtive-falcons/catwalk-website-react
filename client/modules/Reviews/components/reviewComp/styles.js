import styled from 'styled-components';
import { fadeIn, slideUp } from '../animationStyles';

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
  min-height: 550px;
  max-height: 825px;
  padding-bottom: 20px;
  padding-left: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

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
  width: 95%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #ececec;
  margin-top: 15px;
  padding: 20px;
  animation: ${fadeIn} 1.3s ease-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
