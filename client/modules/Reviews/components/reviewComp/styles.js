import styled from 'styled-components'

const DropdownContainer = styled.div`
  select {
    border: none;
    font-weight: bold;
    border-bottom: 2px solid black;
    font-size: 14px;
  }
  margin-left: 5px;
`;

const ReviewListContainer = styled.div`
  flex: 7;
  width: 95%;
  // if more than 4, the list will become scrollable
  max-height: 825px;
  min-height: 500px;
  flex-direction: column;
  // border: 1px solid black;
  justify-content: center;
  align-items: center;
  overflow-y: scroll
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
`;

const ModalContainer = styled.div`
  display: block;
  position:fixed;
  z-index:1;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  left: 0;
  top: 0;
  padding-top: 200px;
  padding-left: 300px;

  .formDiv {
    width: 700px;
    height: 500px;
    background-color: white;
  }
`;

export {ModalContainer, DropdownContainer, ReviewListContainer, ButtonsContainer, TileContainer };