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
  animation: slide-right 15s linear infinite;
  span {
    font-weight: 900;
  }
  @keyframes slide-right {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(80%, 0);
    }
  }
`;

export default DivStyles;
