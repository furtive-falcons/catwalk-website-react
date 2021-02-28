import styled from 'styled-components'

const ReviewCountContainer = styled.div`
  flex: 1;
  width: 95%;
  border: 1px solid black;
`

const ReviewListContainer = styled.div`
  flex: 7;
  width: 95%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`

const ButtonsContainer = styled.div`
  flex: 2;
  width: 95%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
`

const TileContainer = styled.div`
  height: 200px;
  width: 95%;
  border: 1px solid black;

`

export {ReviewCountContainer, ReviewListContainer, ButtonsContainer, TileContainer };