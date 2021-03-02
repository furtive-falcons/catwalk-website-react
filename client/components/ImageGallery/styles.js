import styled from 'styled-components';

const DivStyles = styled.div`
  display: flex;
  flex-direction column;
  align-items: center;
  justify-content: center;
  .expand {
    background-color: red;
    align-self: flex-end;
  }
  .arrow {
    background-color: blue;
    align-self: flex-start;
  }
`;

export default DivStyles;
