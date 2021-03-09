import styled from 'styled-components'

const Container = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;

`

const Header = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Main = styled.div`
  max-width: 1400px;
  margin: auto;
  padding-bottom: 50px;
`;

export {Main, Header, Container};