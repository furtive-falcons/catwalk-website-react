import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const Header = styled.h1`
  font-weight: 600;
  margin-bottom: 30px;
  font-size: 2rem;
`;

const Main = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-bottom: 50px;
  animation : ${fadeIn} 2.5s;

`;

export {
  Main, Header, Container, fadeIn,
};
