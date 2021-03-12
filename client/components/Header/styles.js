import styled from 'styled-components';

import { colorGreyLight1 } from '../../ui/ui-colors';

export const HeaderWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colorGreyLight1};
  color: ${colorGreyLight1};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

export const LinksContainerStyles = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  text-transform: uppercase;
  li:hover{
    font-weight: bold;
    cursor: pointer;
  }
`;
