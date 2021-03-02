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
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const ButtonsContainer = styled.div`
  flex: 2;
  width: 95%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const TileContainer = styled.div`
  padding: 5px;
  width: 95%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export {DropdownContainer, ReviewListContainer, ButtonsContainer, TileContainer };