import styled from 'styled-components';

const DivStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-transform: uppercase;
  font-weight: 400;
  font-style: italic;
  padding: .5rem;
  /* animation: slide-right 15s linear infinite; */
  // convert this to styled component 
  a, span, strong {
    color: inherit;
    font-style: normal;
  }
`;

export default DivStyles;
