import styled from 'styled-components'

const CarouselContainer = styled.div`
  flex: 3.5;
  border: 1px solid red;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const CardContainer = styled.div`
  flex: 7;
  display: flex;
  border: 1px solid blue;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`



export {CarouselContainer,CardContainer};