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
  padding: 0.5rem;
  margin: 0 auto;
  white-space: nowrap;
  padding-left: 100%;
  display: inline-block;
  animation: slide-left 10s linear infinite;
  a,
  span,
  strong {
    color: inherit;
    font-style: normal;
    overflow: hidden;
  }
  @keyframes slide-left {
    0% {
      overflow: hidden;
      transform: translate(0, 0);
    }
    100% {
      overflow: hidden;
      transform: translate(-100%, 0);
    }
  }
`;

export default DivStyles;
