import styled from 'styled-components';

const CarouselContainer = styled.div`
  flex: 3.5;
  display: flex;
  box-sizing: boarder-box;
  flex-flow:row nowrap;
  justify-content: flex-start;
  border: none;
  max-width: 1400px;
  min-width: 375px;
  max-height: 520px;
  margin: 0 auto;
  padding: 10px 0px 10px 0px;
  position: relative;
  overflow: auto hidden;
  scroll-behavior: smooth;
  flex-direction: column;
  .section-header{
    padding: 12px;
    margin: 5px;
  }
`;

export default CarouselContainer;
