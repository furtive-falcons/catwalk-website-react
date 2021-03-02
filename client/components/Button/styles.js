import styled from 'styled-components';

export const ButtonStyles = styled.button`
  text-decoration: solid;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
`;

export const Primary = styled(ButtonStyles)`
  width: ${(props) => props.size}rem;
  border-radius: 0;
`;
