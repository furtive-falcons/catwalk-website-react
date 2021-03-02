import styled from 'styled-components';

const DivStyles = styled.div`
  width: ${(props) => props.width}rem;
  & select {
    margin: 0.5rem;
    border: 0.5rem;
    padding: 1rem;
    background-color: purple;
  }
`;

export default DivStyles;
