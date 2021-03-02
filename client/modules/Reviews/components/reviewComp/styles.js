import styled from 'styled-components'

const ReviewCountContainer = styled.div`
  flex: 1;
  width: 95%;
  border: 1px solid black;
  font-weight: bold;
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

const Button = styled.button`
  height: 50px;
  wdith: 80px;
  border: 1px solid black;
  background: none;
`;

const TileContainer = styled.div`
  padding: 5px;
  height: 200px;
  width: 95%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export {Button, ReviewCountContainer, ReviewListContainer, ButtonsContainer, TileContainer };